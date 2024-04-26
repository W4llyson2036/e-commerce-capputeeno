import { styled } from 'styled-components';

export function SearchBar(): JSX.Element {
    return (
        <SearchBarStyle>
            <InputSearch placeholder="Procurando por algo específico?" />
            
            <svg className="icon icon-search">
                <use xlinkHref="/public/icons.svg#search-loupe-search-loupe"></use>
            </svg>
        </SearchBarStyle>
    );  
}

const SearchBarStyle = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 9px 10px;
    border-radius: 8px;
    background-color: var(--clr-main-bg);
`;

const InputSearch = styled.input`
    width: 100%;
    background-color: var(--clr-main-bg);
`;