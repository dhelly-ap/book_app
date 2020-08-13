import ISBN from 'isbn-validate';

export default function isValidIsbn (str)  {
    const reg = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;

    if (!reg.test(str)) {
        return false;
    }

    str = str.replace(/[^0-9X]/gi, '');
    return ISBN.Validate(str);
}