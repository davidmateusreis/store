package com.david.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.david.backend.models.Cidade;
import com.david.backend.services.CidadeService;

@RestController
@RequestMapping("/api/cidade")
public class CidadeControle {

    @Autowired
    private CidadeService cidadeService;

    @GetMapping("/")
    public List<Cidade> encontrarTodas() {
        return cidadeService.encontrarTodas();
    }

    @PostMapping("/")
    public Cidade inserir(@RequestBody Cidade cidade) {
        return cidadeService.inserir(cidade);
    }

    @PutMapping("/")
    public Cidade alterar(@RequestBody Cidade cidade) {
        return cidadeService.alterar(cidade);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable("id") Long id) {
        cidadeService.remover(id);
        return ResponseEntity.ok().build();
    }
}
