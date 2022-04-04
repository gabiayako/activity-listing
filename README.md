# activity-listing

### Ficha do Faustão

- Listagem de atividades usando useEffect - branch `listagem-useEffect`
    - mudar dados no app.js - mostrar que não atualiza sozinho, precisa clicar no relatório e entrar de novo ou fazer refresh
- Listagem de atividades usando useQuery - branch `listagem-useQuery`
    - mudar dados no app.js - mostrar que atualiza sozinho quando dá foco na aba
    - mostrar o dev tools e adicionar `staleTime` entre as opções
        
- Listagem de atividades pegando dados de outra request - `/reports` - branch `relatorio`
    - refatorar para deixar em um custom hook (useReport)
    - Se não usa o initial data, os dados aparecem depois e fica estranho, mostrar que é possível usar o `isLoading` para isso - branch `relatorio-skeleton`
    - Mostrar que é possível forçar refresh queryClient.invalidateQueries
- Perfil de estudante - prefetch no mouse over - branch `prefetching`
    - Rodar sem prefetching e ver loading
    - Falar sobre chave composta e rodar com prefetching no mouse over
    - mostrar prefetching quando carrega a página
