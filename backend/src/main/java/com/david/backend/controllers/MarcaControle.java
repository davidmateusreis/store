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

import com.david.backend.models.Marca;
import com.david.backend.services.MarcaService;

@RestController
@RequestMapping("/api/marca")
public class MarcaControle {

    @Autowired
    private MarcaService marcaService;

    @GetMapping("/")
    public List<Marca> encontrarTodas() {
        return marcaService.encontrarTodas();
    }

    @PostMapping("/")
    public Marca inserir(@RequestBody Marca marca) {
        return marcaService.inserir(marca);
    }

    @PutMapping("/")
    public Marca alterar(@RequestBody Marca marca) {
        return marcaService.alterar(marca);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable("id") Long id) {
        marcaService.remover(id);
        return ResponseEntity.ok().build();
    }

}
