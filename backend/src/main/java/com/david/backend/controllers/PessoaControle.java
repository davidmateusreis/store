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

import com.david.backend.models.Pessoa;
import com.david.backend.services.PessoaService;

@RestController
@RequestMapping("/api/pessoa")
public class PessoaControle {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping("/")
    public List<Pessoa> encontrarTodas() {
        return pessoaService.encontrarTodas();
    }

    @PostMapping("/")
    public Pessoa inserir(@RequestBody Pessoa pessoa) {
        return pessoaService.inserir(pessoa);
    }

    @PutMapping("/")
    public Pessoa alterar(@RequestBody Pessoa pessoa) {
        return pessoaService.alterar(pessoa);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable("id") Long id) {
        pessoaService.remover(id);
        return ResponseEntity.ok().build();
    }
}
