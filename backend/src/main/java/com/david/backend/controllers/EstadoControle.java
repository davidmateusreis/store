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

import com.david.backend.models.Estado;
import com.david.backend.services.EstadoService;

@RestController
@RequestMapping("/api/estado")
public class EstadoControle {

    @Autowired
    private EstadoService estadoService;

    @GetMapping("/")
    public List<Estado> encontrarTodos() {
        return estadoService.encontrarTodos();
    }
    
    @PostMapping("/")
    public Estado inserir(@RequestBody Estado estado) {
        return estadoService.inserir(estado);
    }

    @PutMapping("/")
    public Estado alterar(@RequestBody Estado estado) {
        return estadoService.alterar(estado);    
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable("id") Long id) {
        estadoService.remover(id);
        return ResponseEntity.ok().build();
    }
}
