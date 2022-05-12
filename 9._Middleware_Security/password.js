import bcrypt, { hash } from "bcrypt";


const saltRounds = 10;
const plaintextpassword = "password";
const hashedPassword = "$2b$10$t1dgVDDAlSVYEIKgNooTDezo9YXVEmEEsaAlqW2B4a3te/tjWZbdy";


async function handlePasswords() {
    const hash = await bcrypt.hash(plaintextpassword, saltRounds);
    console.log(hash);

    const isSame = await bcrypt.compare(plaintextpassword, hashedPassword);
    console.log(isSame);
}

handlePasswords();  


export default{};