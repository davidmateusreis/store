package com.david.backend.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.david.backend.models.Produto;
import com.david.backend.models.ProdutoImagens;
import com.david.backend.repositories.ProdutoImagensRepositorio;
import com.david.backend.repositories.ProdutoRepositorio;

@Service
public class ProdutoImagensService {

    @Autowired
    private ProdutoImagensRepositorio produtoImagensRepositorio;

    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    public List<ProdutoImagens> encontrarTodas() {
        return produtoImagensRepositorio.findAll();
    }

    public ProdutoImagens inserir(Long idProduto, MultipartFile multipartFile) {
        Produto produto = produtoRepositorio.findById(idProduto).get();
        ProdutoImagens produtoImagens = new ProdutoImagens();
        produtoImagens.setProduto(produto);

        try {
            if (!multipartFile.isEmpty()) {
                byte[] bytes = multipartFile.getBytes();
                String nomeImagem = String.valueOf(produto.getId()) + multipartFile.getOriginalFilename();
                Path path = Paths.get("c:/imagens/" + nomeImagem);
                Files.write(path, bytes);
                produtoImagens.setNome(nomeImagem);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        produtoImagens.setDataCriacao(new Date());
        produtoImagens = produtoImagensRepositorio.saveAndFlush(produtoImagens);
        return produtoImagens;
    }

    public ProdutoImagens alterar(ProdutoImagens produtoImagens) {
        produtoImagens.setDataAtualizacao(new Date());
        return produtoImagensRepositorio.saveAndFlush(produtoImagens);
    }

    public void remover(Long id) {
        ProdutoImagens produtoImagens = produtoImagensRepositorio.findById(id).get();
        produtoImagensRepositorio.delete(produtoImagens);
    }
}
