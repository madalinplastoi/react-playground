function SimpleApp() {
    const names = ['Ion','Costica','Gheorghe'];
    const message = 'Hello world!';
    function renderWelcome(name){
        return <h1>Hello {name}!</h1>
    }

    return (
        <div>
            {names.map(x => renderWelcome(x))}
        </div>
    );
}

export default SimpleApp;
