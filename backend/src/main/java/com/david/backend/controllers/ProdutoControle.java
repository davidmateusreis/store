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

import com.david.backend.models.Produto;
import com.david.backend.services.ProdutoService;

@RestController
@RequestMapping("/api/produto")
public class ProdutoControle {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/")
    public List<Produto> encontrarTodos() {
        return produtoService.encontrarTodos();
    }

    @PostMapping("/")
    public Produto inserir(@RequestBody Produto produto) {
        return produtoService.inserir(produto);
    }

    @PutMapping("/")
    public Produto alterar(@RequestBody Produto produto) {
        return produtoService.alterar(produto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable("id") Long id) {
        produtoService.remover(id);
        return ResponseEntity.ok().build();
    }
}
