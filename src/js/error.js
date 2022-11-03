export class Error {

    templates = {
        renderErrorPage: function ({status_code, status_message}) {
            return `
            <div class="container">
                <div class="error">
                    <h2>Status code: ${status_code}</h2>
                    <p>Status message: ${status_message}</p>
                </div>
            </div>
            `;
        }
    };

    constructor(data) {
        this.data = data;
    }

    renderErrorPage() {
        return this.templates.renderErrorPage(this.data)
    }
}