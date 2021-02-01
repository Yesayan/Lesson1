    export default function ({ title, img, text, imgAlt }) {
        return (
            <div>   
                <p>{title}</p>
                <img src={img} alt={imgAlt} />
                <p>{text}</p>
            </div>
        )
    }