
"use strict";

class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
    }

    buildForm() {
        let html = `<h2>Custom Form Builder</h2><form id="dynamicForm">`;

        this.fields.forEach(field => {
            html += `
                <label for="${field.name}">${field.label}</label><br>
                <input
                    type="${field.type}"
                    id="${field.name}"
                    name="${field.name}"
                    required
                ><br><br>
            `;
        });

        html += `<button type="submit">Submit</button></form><pre id="output"></pre>`;

        this.container.innerHTML = html;

        document.getElementById("dynamicForm").addEventListener("submit", event => {
            event.preventDefault();

            const data = this.getFormData();

            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);

            console.log(data);
        });
    }

    getFormData() {
        const data = {};

        this.fields.forEach(field => {
            data[field.name] = document.getElementById(field.name).value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const builder = new FormBuilder(fields, document.body);
builder.buildForm();