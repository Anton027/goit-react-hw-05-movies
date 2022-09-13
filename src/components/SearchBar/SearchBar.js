export function Searchbar({ value, onChange,onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.input.value);
        onSubmit(value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                        name="input"
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.currentTarget.value)}
                        autoFocus
                        placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
} 