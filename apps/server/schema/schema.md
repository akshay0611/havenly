PROFILES {
uuid id PK
text full_name
text email "UNIQUE"
text role
timestamp created_at
timestamp updated_at
}

REFRESH_TOKENS {
uuid id PK
uuid user_id FK
text token_hash
boolean revoked
timestamp created_at
timestamp expires_at
}

PROFILES ||--o{ REFRESH_TOKENS : "has"
