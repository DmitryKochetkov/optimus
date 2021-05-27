package com.optimus.controller;

import com.optimus.dto.DataSourceDto;
import com.optimus.dto.PageDto;
import com.optimus.service.DataSourceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@Slf4j
public class DataSourceController {
    @Autowired
    private DataSourceService dataSourceService;

    @PostMapping(value = "/api/data-sources", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity postCreateDataSource(@RequestPart String name, @RequestPart MultipartFile file) {
        try {
            dataSourceService.createDataSource(name, file);
            return new ResponseEntity(HttpStatus.CREATED);
        }
        catch (IOException e) {
            e.printStackTrace();
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/api/data-sources")
    public ResponseEntity<PageDto<DataSourceDto>> getDataSourcesPage(@RequestParam(name = "page", defaultValue = "0") int pageIndex) {
        Page<DataSourceDto> page = dataSourceService.getPage(pageIndex).map(DataSourceDto::new);
        if (page.getNumber() + 1 > page.getTotalPages() && page.getTotalPages() > 0)
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(new PageDto<DataSourceDto>(page));
    }
}
