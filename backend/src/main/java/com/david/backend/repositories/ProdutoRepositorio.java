package com.david.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.david.backend.models.Produto;

public interface ProdutoRepositorio extends JpaRepository<Produto, Long> {
    
}
