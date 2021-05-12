package com.optimus.dto;

import com.optimus.entity.Scenario;
import lombok.Data;

@Data
public class ScenarioDto {
    private Long id;
    private String title;
    private String description;

    public ScenarioDto(Scenario scenario) {
        this.id = scenario.getId();
        this.title = scenario.getTitle();
        this.description = scenario.getDescription();
    }
}

