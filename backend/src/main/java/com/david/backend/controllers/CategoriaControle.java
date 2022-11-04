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

import com.david.backend.models.Categoria;
import com.david.backend.services.CategoriaService;

@RestController
@RequestMapping("/api/categoria")
public class CategoriaControle {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/")
    public List<Categoria> encontrarTodas() {
        return categoriaService.encontrarTodas();
    }

    @PostMapping("/")
    public Categoria inserir(@RequestBody Categoria categoria) {
        return categoriaService.inserir(categoria);
    }

    @PutMapping("/")
    public Categoria alterar(@RequestBody Categoria categoria) {
        return categoriaService.alterar(categoria);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable("id") long id) {
        categoriaService.remover(id);
        return ResponseEntity.ok().build();
    }

}