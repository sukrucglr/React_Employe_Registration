import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Çalışan Kayıt Sistemi</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Çalışan Ekle</button>
            </div>
        </header>
    )
}

export default Header