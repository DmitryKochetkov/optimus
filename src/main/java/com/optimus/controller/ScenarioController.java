package com.optimus.controller;

import com.optimus.dto.PageDto;
import com.optimus.dto.ScenarioDto;
import com.optimus.entity.Scenario;
import com.optimus.service.ScenarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

@RestController
@Api(tags = "Scenarios")
public class ScenarioController {
    @Autowired
    private ScenarioService scenarioService;

    @GetMapping("/api/scenarios")
    @ApiOperation("Get page of scenarios")
    public ResponseEntity<PageDto<ScenarioDto>> getScenarios(@RequestParam(name = "page", defaultValue = "1") int pageIndex) {
        Page<ScenarioDto> page = scenarioService.getPage(pageIndex).map(ScenarioDto::new);
        if (page.getNumber() + 1 > page.getTotalPages() && page.getTotalPages() > 0)
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(new PageDto<ScenarioDto>(page));
    }

    @GetMapping("/api/scenarios/{id}")
    @ApiOperation("Get scenario by id")
    public ResponseEntity<ScenarioDto> getScenarioById(@PathVariable Long id) {
        Scenario scenario = scenarioService.findById(id).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
        return ResponseEntity.ok(new ScenarioDto(scenario));
    }
}
