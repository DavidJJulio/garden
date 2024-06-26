
export class Mydetails extends HTMLElement{
    p
    myCard
    details
    static query
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = /*html*/`
        <details id="queryAboutTable7">
        <link rel="stylesheet" href="../css/myDetails.css">
                <summary>
                    <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p></p>
                        </div>
                </summary>
                    <div class="report__container">
                        <my-card></my-card>
                    </div>
        </details> 
        `;
        this.p = this.shadowRoot.querySelector("p");
        this.myCard = this.shadowRoot.querySelector("my-card")
        this.details = this.shadowRoot.querySelector("details")
    }

    connectedCallback(){
        this.myCard.setAttribute("logic", Mydetails.query)
    }
    static get observedAttributes(){
        return ["logic", "text"]
    }
    attributeChangedCallback(name, old, now) {
        if(name == "logic") Mydetails.query = now
        if(name == "text") this.p.textContent = now
    }
}

