import './PageNumber.css';

export function PageNumber(): JSX.Element {
    return (
        <nav className='pagination auto-margin-padding' aria-label="Paginação">
            <button aria-label="Página 1">1</button>
            <button aria-label="Página 2">2</button>
            <button aria-label="Página 3">3</button>
            <button aria-label="Página 4">4</button>
            <button aria-label="Página 5">5</button>
            
            <button className='icon-arrow-left' aria-label="Próxima página">
                <svg className="icon">
                    <use xlinkHref="/public/icons.svg#arrow-left"></use>
                </svg>
            </button>

            <button className='icon-arrow-right' aria-label="Página anterior">
                <svg className="icon ">
                    <use xlinkHref="/public/icons.svg#arrow-right"></use>
                </svg>
            </button>
        </nav>
    );
}