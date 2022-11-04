package com.david.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.david.backend.models.ProdutoImagens;

public interface ProdutoImagensRepositorio extends JpaRepository<ProdutoImagens, Long> {
    
}
