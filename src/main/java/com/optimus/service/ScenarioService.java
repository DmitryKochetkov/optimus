package com.optimus.service;

import com.optimus.entity.Scenario;
import com.optimus.repository.ScenarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ScenarioService {
    @Autowired
    private ScenarioRepository scenarioRepository;

    public Optional<Scenario> findById(Long id) {
        return scenarioRepository.findById(id);
    }

    public Page<Scenario> getPage(int index) {
        return scenarioRepository.findAll(PageRequest.of(index, 10));
    }
}
