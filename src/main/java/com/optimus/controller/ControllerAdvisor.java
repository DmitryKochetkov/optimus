package com.optimus.controller;

import com.optimus.dto.ApiErrorDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Slf4j
public class ControllerAdvisor extends ResponseEntityExceptionHandler {
    @ExceptionHandler(HttpStatusCodeException.class)
    public ResponseEntity<ApiErrorDto> handleHttpStatusCodeException(HttpStatusCodeException ex, WebRequest request) {
        ApiErrorDto error = new ApiErrorDto();
        error.setStatusCode(ex.getRawStatusCode());
        error.setStatusText(ex.getStatusCode().getReasonPhrase());
        error.setDescription(ex.getStatusText());
        log.info("Resolved HttpStatusCodeException {} for web request {}", ex.toString(), request.toString());

        return new ResponseEntity<ApiErrorDto>(error, ex.getStatusCode());
    }
}
