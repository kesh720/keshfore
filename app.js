function App() {
    try {
        const [selectedCategory, setSelectedCategory] = React.useState("All");
        const [searchTerm, setSearchTerm] = React.useState("");
        const [selectedRecipe, setSelectedRecipe] = React.useState(null);
        
        const filteredRecipes = filterRecipes(selectedCategory, searchTerm);

        return (
            <div className="min-h-screen" data-name="app">
                <Navbar />
                <Hero />
                
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <CategoryFilter 
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                    <SearchBar onSearch={setSearchTerm} />
                    <RecipeGrid 
                        recipes={filteredRecipes}
                        onRecipeClick={setSelectedRecipe}
                    />
                </main>

                {selectedRecipe && (
                    <RecipeDetails 
                        recipe={selectedRecipe}
                        onClose={() => setSelectedRecipe(null)}
                    />
                )}

                <Footer />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
