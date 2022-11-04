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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.david.backend.models.ProdutoImagens;
import com.david.backend.services.ProdutoImagensService;

@RestController
@RequestMapping("/api/produtoImagens")
public class ProdutoImagensControle {

    @Autowired
    private ProdutoImagensService produtoImagensService;

    @GetMapping("/")
    public List<ProdutoImagens> encontrarTodas() {
        return produtoImagensService.encontrarTodas();
    }

    @PostMapping("/")
    public ProdutoImagens inserir(@RequestParam("idProduto") long idProduto,
            @RequestParam("multipartFile") MultipartFile multipartFile) {
        return produtoImagensService.inserir(idProduto, multipartFile);

    }

    @PutMapping("/")
    public ProdutoImagens alterar(@RequestBody ProdutoImagens produtoImagens) {
        return produtoImagensService.alterar(produtoImagens);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable("id") Long id) {
        produtoImagensService.remover(id);
        return ResponseEntity.ok().build();
    }
}
