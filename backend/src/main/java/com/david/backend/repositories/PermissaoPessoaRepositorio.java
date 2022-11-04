package com.david.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.david.backend.models.PermissaoPessoa;

public interface PermissaoPessoaRepositorio extends JpaRepository<PermissaoPessoa, Long> {
    
}
