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

import com.david.backend.models.Permissao;
import com.david.backend.services.PermissaoService;

@RestController
@RequestMapping("/api/permissao")
public class PermissaoControle {

    @Autowired
    private PermissaoService permissaoService;

    @GetMapping("/")
    public List<Permissao> encontrarTodas() {
        return permissaoService.encontrarTodas();
    }

    @PostMapping("/")
    public Permissao inserir(@RequestBody Permissao permissao) {
        return permissaoService.inserir(permissao);
    }

    @PutMapping("/")
    public Permissao alterar(@RequestBody Permissao permissao) {
        return permissaoService.alterar(permissao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable("id") Long id) {
        permissaoService.remover(id);
        return ResponseEntity.ok().build();
    }
    
}
