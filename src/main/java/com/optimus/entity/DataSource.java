package com.optimus.entity;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "data_sources")
@Data
public class DataSource extends BaseEntity {
    @Autowired
    private String name;

    @Autowired
    private String pathToFile;
}
