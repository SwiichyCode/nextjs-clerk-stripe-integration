# Dependency Injection System Documentation

This document explains the dependency injection (DI) system implementation using `@evyweb/ioctopus`.

## Table of Contents

- [Overview](#overview)
- [Structure](#structure)
- [Core Concepts](#core-concepts)
- [Usage](#usage)
- [Examples](#examples)

## Overview

The DI system provides a modular and type-safe way to manage dependencies throughout the application. It uses a
container-based approach with symbols for type-safe injection.

## Structure
dependency_injection/
├── container.ts # Main container configuration
├── types.ts # DI symbols and return types
└── modules/ # Feature-specific modules
├── note.module.ts
├── auth.module.ts
└── ...

## Core Concepts

### Container

The container is the central registry for all dependencies. It's configured in `container.ts`:

```typescript
const ApplicationContainer = createContainer();

// Load feature modules
ApplicationContainer.load(Symbol('NoteModule'), createNoteModule());

// Export the container instance
export function getInjection<K extends keyof typeof DI_SYMBOLS>(
symbol: K
): DI_RETURN_TYPES[K] {
return ApplicationContainer.get(DI_SYMBOLS[symbol]);
}
```

### Symbols

Symbols are unique identifiers for dependencies, defined in `types.ts`:

```typescript
export const DI_SYMBOLS = {
NoteService: Symbol.for('NoteService'),
NoteRepository: Symbol.for('NoteRepository'),
};
```

### Return Types

Return types are the actual implementations of the dependencies, defined in `types.ts`:

```typescript
export interface DI_RETURN_TYPES {
NoteService: NoteService;
}
```

### Modules

Modules are feature-specific configurations that bind symbols to their implementations.

```typescript
export function createNoteModule() {
const noteModule = createModule();

noteModule.bind(DI_SYMBOLS.NoteRepository).toClass(PrismaNoteRepository);
noteModule.bind(DI_SYMBOLS.NoteService).toClass(NoteServiceImpl, [DI_SYMBOLS.NoteRepository]);

return noteModule;
}
```

## Usage

To inject a dependency, use the `getInjection` function:

```typescript
import { getInjection } from '@/di/container';

const noteService = getInjection('NoteService');
```