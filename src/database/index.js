import users from "./mockedDatabase";

export default new class Database {
    FindOneById(id) {
        return users.find(user => user.id === id);
    }
    FindAll(args) {
        const argsArr = Object.entries(args);

        if(argsArr.length == 0) return users;

        let usersFiltred = [ ...users ];
        argsArr.forEach((key_value) => {
            const [key,value] = key_value;
            const filtrenessResult = usersFiltred.filter(user => user[`${key}`] === value);
            usersFiltred = filtrenessResult;
        });

        return usersFiltred;
    }
    Create(userFields) {
        const id = Number(users.length);
        userFields.id = id;

        users.push(userFields);
        return this.FindOneById(id);
    }
}