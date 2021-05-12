package com.optimus.entity;

import com.optimus.dto.ScenarioDto;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name ="scenarios")
@Data
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Scenario extends BaseEntity {
    @Column
    private String title;

    @Column
    private String description;

    @Column
    private LocalDateTime created;
}
