import React, { ReactElement, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import ContentLayout from '../../components/ContentLayout';
import LayoutConfigurer from '../../components/LayoutConfigurer';
import { login } from '../Auth/routes';
import { Props } from './types';
import { home, pessoa, produto, nav1, nav2 } from './routes';

export default function Main({ isAuthenticated, getRoot }: Props): ReactElement {
    useEffect(() => {
        getRoot();
    }, [getRoot]);
    return (
        <>
            {isAuthenticated ? (
                <MainLayout>
                    <Route
                        {...home}
                        render={() => (
                            <LayoutConfigurer breadcrumb={[]}>
                                <ContentLayout />
                            </LayoutConfigurer>
                        )}
                    />
                    <Route
                        {...pessoa}
                        render={() => (
                            <LayoutConfigurer breadcrumb={[{ title: 'Pessoa', path: pessoa.path }]}>
                                <h1>Cadastro de Pessoas</h1>
                            </LayoutConfigurer>
                        )}
                    />
                    <Route
                        {...produto}
                        render={() => (
                            <LayoutConfigurer breadcrumb={[{ title: 'Produto', path: produto.path }]}>
                                <h1>Cadastro de Produtos</h1>
                            </LayoutConfigurer>
                        )}
                    />
                    <Route
                        {...nav1}
                        render={() => (
                            <LayoutConfigurer breadcrumb={[{ title: 'Nav 1', path: nav1.path }]}>
                                <h1>Nav1</h1>
                            </LayoutConfigurer>
                        )}
                    />
                    <Route
                        {...nav2}
                        render={() => (
                            <LayoutConfigurer breadcrumb={[{ title: 'Nav 2', path: nav2.path }]}>
                                <h1>Nav2</h1>
                            </LayoutConfigurer>
                        )}
                    />
                </MainLayout>
            ) : (
                <Redirect to={login.path} />
            )}
        </>
    );
}
