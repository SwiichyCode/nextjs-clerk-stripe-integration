# Choosing Between `class` and `type/interface` for Domain Entities in TypeScript

In **Hexagonal Architecture** (Ports & Adapters), domain entities represent core business concepts. When defining these entities in TypeScript, you might wonder:
- Should I use a **`class`** or a **`type/interface`**?

This README explains when to choose one over the other. 

## **1️⃣ Difference Between `class` and `type/interface`**

| 🆕 **Class** | 📌 **Type / Interface** |
|------------|------------------|
| Allows adding methods (behavior) | Only describes the structure |
| Supports encapsulation (`private`, `readonly`) | Everything is public |
| Ensures a valid state at instantiation | No instance validation |
| Can be instantiated with `new` | Used as a simple object |

## **2️⃣ When to Use a `class`?**
✅ If the entity **has business logic or behavior**, a `class` is **recommended**.  
✅ If you want to **encapsulate properties** (`private`, `readonly`).  
✅ If you need to **ensure data validity upon creation**.

### **Example: `User` entity with validation and behavior**
```ts
export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    private password: string, 
    public readonly createdAt: Date,
  ) {
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email');
    }
  }

  private isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  get maskedEmail(): string {
    return this.email.replace(/(.{2}).+(@.+)/, "$1***$2");
  }

  checkPassword(plainText: string): boolean {
    return this.password === plainText; // Simplified, normally hashed
  }
}
```
🟢 **Why use a `class` here?**
- **Encapsulation** (`private password`).
- **Methods with business logic** (`checkPassword()`, `maskedEmail`).
- **Ensures a valid entity upon creation** (`isValidEmail`).

---

## **3️⃣ When to Use a `type` or `interface`?**
✅ If the entity **only holds data** without logic.
✅ If you want **better performance** (less overhead than a class).
✅ If the entity needs to be **serializable/deserializable** easily.

### **Example: Simple `User` type without behavior**
```ts
export type User = {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
};
```
🟢 **Why use a `type` here?**
- **No business logic**.
- A simple **data object** (JSON-like structure).
- **Ideal for API communication / DTOs**.

---

## **4️⃣ General Rule 📌**
- **If the entity represents an active "business concept" with rules and logic → 🏆 Use a `class`**.
- **If the entity is just a "data container" → 🏆 Use a `type` or `interface`**.

---

## **5️⃣ Example: Combining Both**
You can mix both approaches:
- Use a `class` for **domain logic**.
- Use a `type` for **data transfer objects (DTOs)**.

```ts
export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    private password: string,
    public readonly createdAt: Date,
  ) {}

  checkPassword(plainText: string): boolean {
    return this.password === plainText;
  }
}

// DTO for API communication
export type UserDTO = {
  id: string;
  email: string;
  createdAt: Date;
};
```
📌 **`User` (`class`) handles business logic, `UserDTO` (`type`) is for data exchange.**

---

## **💡 Conclusion**
✔ **If you need methods, validation → `class`**  
✔ **If it's just a data model → `type` or `interface`**  
✔ **Mix both when necessary**  

Hope this helps! 🚀

