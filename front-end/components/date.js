import {isValid, parseISO, format} from 'date-fns';

export default function Date({dateString }){
    if (!isValid(parseISO(dateString))){
        return 'No date'
    }
    const date = parseISO(dateString)
    return <div className="container"><time dateTime={dateString}>{format(date, 'LLLL    d, yyyy')}</time>
    <style jsx>{`
    .container{
        color:grey;
        margin-top:0.5rem;
        font-size:0.8rem;

    }
    `}</style>
    </div>
}