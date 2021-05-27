package com.optimus.dto;

import com.optimus.entity.DataSource;
import lombok.Data;

@Data
public class DataSourceDto {
    private String name;
    private String type;

    public DataSourceDto(DataSource dataSource) {
        this.name = dataSource.getName();
        this.type = "CSV";
    }
}
