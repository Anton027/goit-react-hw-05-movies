export function Searchbar({ value,onChange }) {
    return (
            <div>
                    <input
                        name="input"
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        autoFocus
                        placeholder="Search images and photos"
                    />
            </div>
        )
} 