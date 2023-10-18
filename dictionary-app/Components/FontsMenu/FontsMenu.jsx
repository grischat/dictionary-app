import '../FontsMenu/FontsMenu.scss'
const FontsMenu = () => {
    const handleContainerClick = (e) => {
        e.stopPropagation()
    }
    return (
        <div className='fonts__container' onClick={handleContainerClick}>
            <ul className="font-list">
                <li className='sans-serif'>Sans Serif</li>
                <li className='serif'>Serif</li>
                <li className='mono'>Mono</li>
            </ul>
        </div>
    )
}

export default FontsMenu