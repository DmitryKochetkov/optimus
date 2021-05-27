package com.optimus.service;

import com.optimus.entity.DataSource;
import com.optimus.repository.DataSourceRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@Slf4j
public class DataSourceService {
    @Autowired
    private DataSourceRepository dataSourceRepository;

    @Value("${storage.root}")
    private String root;

    public DataSource createDataSource(String name, MultipartFile file) throws IOException {
        DataSource dataSource = new DataSource();
        dataSource.setName(name);
        String filename = "file-" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd-HH-mm-ss-SSS")) + "." + FilenameUtils.getExtension(file.getOriginalFilename());
        String path = root + "/data-sources/" + filename;

        File localFile = new File(path);
        file.transferTo(localFile);
        dataSource.setPathToFile(path);
        dataSourceRepository.save(dataSource);
        log.info("Data source " + dataSource.getName() + " successfully created and saved to " + dataSource.getPathToFile());
        return dataSource;
    }

    public Page<DataSource> getPage(int pageIndex) {
        return dataSourceRepository.findAll(PageRequest.of(pageIndex, 10));
    }
}
