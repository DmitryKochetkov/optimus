package com.optimus.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "lp_scenarios")
@Data
public class LinearProgrammingScenario extends Scenario {
    private String costFunctionPath;
    private String lhsPath;
    private String rhsPath;
}
