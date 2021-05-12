package com.optimus.controller;

import com.optimus.dto.PageDto;
import com.optimus.dto.ScenarioDto;
import com.optimus.service.ScenarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

@RestController
public class ScenarioController {
    @Autowired
    private ScenarioService scenarioService;

    @GetMapping("/api/scenarios")
    public ResponseEntity<PageDto<ScenarioDto>> getScenarios(@RequestParam(name = "page", defaultValue = "1") int pageIndex) {
        Page<ScenarioDto> page = scenarioService.getPage(pageIndex).map(ScenarioDto::new);
        if (page.getNumber() + 1 > page.getTotalPages() && page.getTotalPages() > 0)
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(new PageDto<ScenarioDto>(page));
    }
}
