package com.optimus.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ApiErrorDto {
    private int statusCode;
    private String statusText;
    private String description;
}
