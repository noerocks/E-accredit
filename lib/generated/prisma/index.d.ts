
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model ProgramPersonnel
 * 
 */
export type ProgramPersonnel = $Result.DefaultSelection<Prisma.$ProgramPersonnelPayload>
/**
 * Model Instrument
 * 
 */
export type Instrument = $Result.DefaultSelection<Prisma.$InstrumentPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Parameter
 * 
 */
export type Parameter = $Result.DefaultSelection<Prisma.$ParameterPayload>
/**
 * Model Indicator
 * 
 */
export type Indicator = $Result.DefaultSelection<Prisma.$IndicatorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  ACCREDITATION_OFFICER: 'ACCREDITATION_OFFICER',
  ACCREDITOR: 'ACCREDITOR',
  PENDING: 'PENDING'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ProgramPosition: {
  CHAIRPERSON: 'CHAIRPERSON',
  MEMBER: 'MEMBER'
};

export type ProgramPosition = (typeof ProgramPosition)[keyof typeof ProgramPosition]


export const Category: {
  SYSTEM: 'SYSTEM',
  IMPLEMENTATION: 'IMPLEMENTATION',
  OUTCOME: 'OUTCOME'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ProgramPosition = $Enums.ProgramPosition

export const ProgramPosition: typeof $Enums.ProgramPosition

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programPersonnel`: Exposes CRUD operations for the **ProgramPersonnel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramPersonnels
    * const programPersonnels = await prisma.programPersonnel.findMany()
    * ```
    */
  get programPersonnel(): Prisma.ProgramPersonnelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instrument`: Exposes CRUD operations for the **Instrument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instruments
    * const instruments = await prisma.instrument.findMany()
    * ```
    */
  get instrument(): Prisma.InstrumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parameter`: Exposes CRUD operations for the **Parameter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parameters
    * const parameters = await prisma.parameter.findMany()
    * ```
    */
  get parameter(): Prisma.ParameterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indicator`: Exposes CRUD operations for the **Indicator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indicators
    * const indicators = await prisma.indicator.findMany()
    * ```
    */
  get indicator(): Prisma.IndicatorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Program: 'Program',
    ProgramPersonnel: 'ProgramPersonnel',
    Instrument: 'Instrument',
    Area: 'Area',
    Parameter: 'Parameter',
    Indicator: 'Indicator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "program" | "programPersonnel" | "instrument" | "area" | "parameter" | "indicator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      ProgramPersonnel: {
        payload: Prisma.$ProgramPersonnelPayload<ExtArgs>
        fields: Prisma.ProgramPersonnelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramPersonnelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramPersonnelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>
          }
          findFirst: {
            args: Prisma.ProgramPersonnelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramPersonnelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>
          }
          findMany: {
            args: Prisma.ProgramPersonnelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>[]
          }
          create: {
            args: Prisma.ProgramPersonnelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>
          }
          createMany: {
            args: Prisma.ProgramPersonnelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramPersonnelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>[]
          }
          delete: {
            args: Prisma.ProgramPersonnelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>
          }
          update: {
            args: Prisma.ProgramPersonnelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>
          }
          deleteMany: {
            args: Prisma.ProgramPersonnelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramPersonnelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramPersonnelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>[]
          }
          upsert: {
            args: Prisma.ProgramPersonnelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPersonnelPayload>
          }
          aggregate: {
            args: Prisma.ProgramPersonnelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramPersonnel>
          }
          groupBy: {
            args: Prisma.ProgramPersonnelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramPersonnelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramPersonnelCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramPersonnelCountAggregateOutputType> | number
          }
        }
      }
      Instrument: {
        payload: Prisma.$InstrumentPayload<ExtArgs>
        fields: Prisma.InstrumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstrumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstrumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findFirst: {
            args: Prisma.InstrumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstrumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findMany: {
            args: Prisma.InstrumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          create: {
            args: Prisma.InstrumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          createMany: {
            args: Prisma.InstrumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstrumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          delete: {
            args: Prisma.InstrumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          update: {
            args: Prisma.InstrumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          deleteMany: {
            args: Prisma.InstrumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstrumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstrumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          upsert: {
            args: Prisma.InstrumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          aggregate: {
            args: Prisma.InstrumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstrument>
          }
          groupBy: {
            args: Prisma.InstrumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstrumentCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Parameter: {
        payload: Prisma.$ParameterPayload<ExtArgs>
        fields: Prisma.ParameterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParameterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParameterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          findFirst: {
            args: Prisma.ParameterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParameterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          findMany: {
            args: Prisma.ParameterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>[]
          }
          create: {
            args: Prisma.ParameterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          createMany: {
            args: Prisma.ParameterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParameterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>[]
          }
          delete: {
            args: Prisma.ParameterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          update: {
            args: Prisma.ParameterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          deleteMany: {
            args: Prisma.ParameterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParameterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParameterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>[]
          }
          upsert: {
            args: Prisma.ParameterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          aggregate: {
            args: Prisma.ParameterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParameter>
          }
          groupBy: {
            args: Prisma.ParameterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParameterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParameterCountArgs<ExtArgs>
            result: $Utils.Optional<ParameterCountAggregateOutputType> | number
          }
        }
      }
      Indicator: {
        payload: Prisma.$IndicatorPayload<ExtArgs>
        fields: Prisma.IndicatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndicatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndicatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          findFirst: {
            args: Prisma.IndicatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndicatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          findMany: {
            args: Prisma.IndicatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>[]
          }
          create: {
            args: Prisma.IndicatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          createMany: {
            args: Prisma.IndicatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndicatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>[]
          }
          delete: {
            args: Prisma.IndicatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          update: {
            args: Prisma.IndicatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          deleteMany: {
            args: Prisma.IndicatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndicatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndicatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>[]
          }
          upsert: {
            args: Prisma.IndicatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorPayload>
          }
          aggregate: {
            args: Prisma.IndicatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndicator>
          }
          groupBy: {
            args: Prisma.IndicatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndicatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndicatorCountArgs<ExtArgs>
            result: $Utils.Optional<IndicatorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    program?: ProgramOmit
    programPersonnel?: ProgramPersonnelOmit
    instrument?: InstrumentOmit
    area?: AreaOmit
    parameter?: ParameterOmit
    indicator?: IndicatorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    programPersonnel: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programPersonnel?: boolean | UserCountOutputTypeCountProgramPersonnelArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgramPersonnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramPersonnelWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    programPersonnel: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programPersonnel?: boolean | ProgramCountOutputTypeCountProgramPersonnelArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountProgramPersonnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramPersonnelWhereInput
  }


  /**
   * Count Type InstrumentCountOutputType
   */

  export type InstrumentCountOutputType = {
    area: number
  }

  export type InstrumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | InstrumentCountOutputTypeCountAreaArgs
  }

  // Custom InputTypes
  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentCountOutputType
     */
    select?: InstrumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeCountAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    parameter: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | AreaCountOutputTypeCountParameterArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountParameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterWhereInput
  }


  /**
   * Count Type ParameterCountOutputType
   */

  export type ParameterCountOutputType = {
    indicator: number
  }

  export type ParameterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    indicator?: boolean | ParameterCountOutputTypeCountIndicatorArgs
  }

  // Custom InputTypes
  /**
   * ParameterCountOutputType without action
   */
  export type ParameterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterCountOutputType
     */
    select?: ParameterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParameterCountOutputType without action
   */
  export type ParameterCountOutputTypeCountIndicatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndicatorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    hashedPassword: string | null
    photoURL: string | null
    address: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    hashedPassword: string | null
    photoURL: string | null
    address: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phoneNumber: number
    email: number
    hashedPassword: number
    photoURL: number
    address: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    hashedPassword?: true
    photoURL?: true
    address?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    hashedPassword?: true
    photoURL?: true
    address?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    hashedPassword?: true
    photoURL?: true
    address?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    hashedPassword: string
    photoURL: string | null
    address: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    hashedPassword?: boolean
    photoURL?: boolean
    address?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    programPersonnel?: boolean | User$programPersonnelArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    hashedPassword?: boolean
    photoURL?: boolean
    address?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    hashedPassword?: boolean
    photoURL?: boolean
    address?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    hashedPassword?: boolean
    photoURL?: boolean
    address?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phoneNumber" | "email" | "hashedPassword" | "photoURL" | "address" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programPersonnel?: boolean | User$programPersonnelArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      programPersonnel: Prisma.$ProgramPersonnelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      phoneNumber: string
      email: string
      hashedPassword: string
      photoURL: string | null
      address: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programPersonnel<T extends User$programPersonnelArgs<ExtArgs> = {}>(args?: Subset<T, User$programPersonnelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly photoURL: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.programPersonnel
   */
  export type User$programPersonnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    where?: ProgramPersonnelWhereInput
    orderBy?: ProgramPersonnelOrderByWithRelationInput | ProgramPersonnelOrderByWithRelationInput[]
    cursor?: ProgramPersonnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramPersonnelScalarFieldEnum | ProgramPersonnelScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    name: number
    code: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    name: string
    code: string
    department: string
    createdAt: Date
    updatedAt: Date
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    programPersonnel?: boolean | Program$programPersonnelArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programPersonnel?: boolean | Program$programPersonnelArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      programPersonnel: Prisma.$ProgramPersonnelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      department: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {ProgramUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programPersonnel<T extends Program$programPersonnelArgs<ExtArgs> = {}>(args?: Subset<T, Program$programPersonnelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'String'>
    readonly name: FieldRef<"Program", 'String'>
    readonly code: FieldRef<"Program", 'String'>
    readonly department: FieldRef<"Program", 'String'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program updateManyAndReturn
   */
  export type ProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.programPersonnel
   */
  export type Program$programPersonnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    where?: ProgramPersonnelWhereInput
    orderBy?: ProgramPersonnelOrderByWithRelationInput | ProgramPersonnelOrderByWithRelationInput[]
    cursor?: ProgramPersonnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramPersonnelScalarFieldEnum | ProgramPersonnelScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model ProgramPersonnel
   */

  export type AggregateProgramPersonnel = {
    _count: ProgramPersonnelCountAggregateOutputType | null
    _min: ProgramPersonnelMinAggregateOutputType | null
    _max: ProgramPersonnelMaxAggregateOutputType | null
  }

  export type ProgramPersonnelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    programId: string | null
    assignedAt: Date | null
  }

  export type ProgramPersonnelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    programId: string | null
    assignedAt: Date | null
  }

  export type ProgramPersonnelCountAggregateOutputType = {
    id: number
    userId: number
    programId: number
    assignedAt: number
    _all: number
  }


  export type ProgramPersonnelMinAggregateInputType = {
    id?: true
    userId?: true
    programId?: true
    assignedAt?: true
  }

  export type ProgramPersonnelMaxAggregateInputType = {
    id?: true
    userId?: true
    programId?: true
    assignedAt?: true
  }

  export type ProgramPersonnelCountAggregateInputType = {
    id?: true
    userId?: true
    programId?: true
    assignedAt?: true
    _all?: true
  }

  export type ProgramPersonnelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramPersonnel to aggregate.
     */
    where?: ProgramPersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramPersonnels to fetch.
     */
    orderBy?: ProgramPersonnelOrderByWithRelationInput | ProgramPersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramPersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramPersonnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramPersonnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramPersonnels
    **/
    _count?: true | ProgramPersonnelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramPersonnelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramPersonnelMaxAggregateInputType
  }

  export type GetProgramPersonnelAggregateType<T extends ProgramPersonnelAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramPersonnel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramPersonnel[P]>
      : GetScalarType<T[P], AggregateProgramPersonnel[P]>
  }




  export type ProgramPersonnelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramPersonnelWhereInput
    orderBy?: ProgramPersonnelOrderByWithAggregationInput | ProgramPersonnelOrderByWithAggregationInput[]
    by: ProgramPersonnelScalarFieldEnum[] | ProgramPersonnelScalarFieldEnum
    having?: ProgramPersonnelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramPersonnelCountAggregateInputType | true
    _min?: ProgramPersonnelMinAggregateInputType
    _max?: ProgramPersonnelMaxAggregateInputType
  }

  export type ProgramPersonnelGroupByOutputType = {
    id: string
    userId: string
    programId: string
    assignedAt: Date
    _count: ProgramPersonnelCountAggregateOutputType | null
    _min: ProgramPersonnelMinAggregateOutputType | null
    _max: ProgramPersonnelMaxAggregateOutputType | null
  }

  type GetProgramPersonnelGroupByPayload<T extends ProgramPersonnelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramPersonnelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramPersonnelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramPersonnelGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramPersonnelGroupByOutputType[P]>
        }
      >
    >


  export type ProgramPersonnelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    programId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programPersonnel"]>

  export type ProgramPersonnelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    programId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programPersonnel"]>

  export type ProgramPersonnelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    programId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programPersonnel"]>

  export type ProgramPersonnelSelectScalar = {
    id?: boolean
    userId?: boolean
    programId?: boolean
    assignedAt?: boolean
  }

  export type ProgramPersonnelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "programId" | "assignedAt", ExtArgs["result"]["programPersonnel"]>
  export type ProgramPersonnelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type ProgramPersonnelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type ProgramPersonnelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $ProgramPersonnelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramPersonnel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      program: Prisma.$ProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      programId: string
      assignedAt: Date
    }, ExtArgs["result"]["programPersonnel"]>
    composites: {}
  }

  type ProgramPersonnelGetPayload<S extends boolean | null | undefined | ProgramPersonnelDefaultArgs> = $Result.GetResult<Prisma.$ProgramPersonnelPayload, S>

  type ProgramPersonnelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramPersonnelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramPersonnelCountAggregateInputType | true
    }

  export interface ProgramPersonnelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramPersonnel'], meta: { name: 'ProgramPersonnel' } }
    /**
     * Find zero or one ProgramPersonnel that matches the filter.
     * @param {ProgramPersonnelFindUniqueArgs} args - Arguments to find a ProgramPersonnel
     * @example
     * // Get one ProgramPersonnel
     * const programPersonnel = await prisma.programPersonnel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramPersonnelFindUniqueArgs>(args: SelectSubset<T, ProgramPersonnelFindUniqueArgs<ExtArgs>>): Prisma__ProgramPersonnelClient<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramPersonnel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramPersonnelFindUniqueOrThrowArgs} args - Arguments to find a ProgramPersonnel
     * @example
     * // Get one ProgramPersonnel
     * const programPersonnel = await prisma.programPersonnel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramPersonnelFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramPersonnelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramPersonnelClient<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramPersonnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramPersonnelFindFirstArgs} args - Arguments to find a ProgramPersonnel
     * @example
     * // Get one ProgramPersonnel
     * const programPersonnel = await prisma.programPersonnel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramPersonnelFindFirstArgs>(args?: SelectSubset<T, ProgramPersonnelFindFirstArgs<ExtArgs>>): Prisma__ProgramPersonnelClient<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramPersonnel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramPersonnelFindFirstOrThrowArgs} args - Arguments to find a ProgramPersonnel
     * @example
     * // Get one ProgramPersonnel
     * const programPersonnel = await prisma.programPersonnel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramPersonnelFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramPersonnelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramPersonnelClient<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramPersonnels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramPersonnelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramPersonnels
     * const programPersonnels = await prisma.programPersonnel.findMany()
     * 
     * // Get first 10 ProgramPersonnels
     * const programPersonnels = await prisma.programPersonnel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programPersonnelWithIdOnly = await prisma.programPersonnel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramPersonnelFindManyArgs>(args?: SelectSubset<T, ProgramPersonnelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramPersonnel.
     * @param {ProgramPersonnelCreateArgs} args - Arguments to create a ProgramPersonnel.
     * @example
     * // Create one ProgramPersonnel
     * const ProgramPersonnel = await prisma.programPersonnel.create({
     *   data: {
     *     // ... data to create a ProgramPersonnel
     *   }
     * })
     * 
     */
    create<T extends ProgramPersonnelCreateArgs>(args: SelectSubset<T, ProgramPersonnelCreateArgs<ExtArgs>>): Prisma__ProgramPersonnelClient<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramPersonnels.
     * @param {ProgramPersonnelCreateManyArgs} args - Arguments to create many ProgramPersonnels.
     * @example
     * // Create many ProgramPersonnels
     * const programPersonnel = await prisma.programPersonnel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramPersonnelCreateManyArgs>(args?: SelectSubset<T, ProgramPersonnelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgramPersonnels and returns the data saved in the database.
     * @param {ProgramPersonnelCreateManyAndReturnArgs} args - Arguments to create many ProgramPersonnels.
     * @example
     * // Create many ProgramPersonnels
     * const programPersonnel = await prisma.programPersonnel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgramPersonnels and only return the `id`
     * const programPersonnelWithIdOnly = await prisma.programPersonnel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramPersonnelCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramPersonnelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgramPersonnel.
     * @param {ProgramPersonnelDeleteArgs} args - Arguments to delete one ProgramPersonnel.
     * @example
     * // Delete one ProgramPersonnel
     * const ProgramPersonnel = await prisma.programPersonnel.delete({
     *   where: {
     *     // ... filter to delete one ProgramPersonnel
     *   }
     * })
     * 
     */
    delete<T extends ProgramPersonnelDeleteArgs>(args: SelectSubset<T, ProgramPersonnelDeleteArgs<ExtArgs>>): Prisma__ProgramPersonnelClient<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramPersonnel.
     * @param {ProgramPersonnelUpdateArgs} args - Arguments to update one ProgramPersonnel.
     * @example
     * // Update one ProgramPersonnel
     * const programPersonnel = await prisma.programPersonnel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramPersonnelUpdateArgs>(args: SelectSubset<T, ProgramPersonnelUpdateArgs<ExtArgs>>): Prisma__ProgramPersonnelClient<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramPersonnels.
     * @param {ProgramPersonnelDeleteManyArgs} args - Arguments to filter ProgramPersonnels to delete.
     * @example
     * // Delete a few ProgramPersonnels
     * const { count } = await prisma.programPersonnel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramPersonnelDeleteManyArgs>(args?: SelectSubset<T, ProgramPersonnelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramPersonnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramPersonnelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramPersonnels
     * const programPersonnel = await prisma.programPersonnel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramPersonnelUpdateManyArgs>(args: SelectSubset<T, ProgramPersonnelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramPersonnels and returns the data updated in the database.
     * @param {ProgramPersonnelUpdateManyAndReturnArgs} args - Arguments to update many ProgramPersonnels.
     * @example
     * // Update many ProgramPersonnels
     * const programPersonnel = await prisma.programPersonnel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgramPersonnels and only return the `id`
     * const programPersonnelWithIdOnly = await prisma.programPersonnel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgramPersonnelUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramPersonnelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgramPersonnel.
     * @param {ProgramPersonnelUpsertArgs} args - Arguments to update or create a ProgramPersonnel.
     * @example
     * // Update or create a ProgramPersonnel
     * const programPersonnel = await prisma.programPersonnel.upsert({
     *   create: {
     *     // ... data to create a ProgramPersonnel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramPersonnel we want to update
     *   }
     * })
     */
    upsert<T extends ProgramPersonnelUpsertArgs>(args: SelectSubset<T, ProgramPersonnelUpsertArgs<ExtArgs>>): Prisma__ProgramPersonnelClient<$Result.GetResult<Prisma.$ProgramPersonnelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramPersonnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramPersonnelCountArgs} args - Arguments to filter ProgramPersonnels to count.
     * @example
     * // Count the number of ProgramPersonnels
     * const count = await prisma.programPersonnel.count({
     *   where: {
     *     // ... the filter for the ProgramPersonnels we want to count
     *   }
     * })
    **/
    count<T extends ProgramPersonnelCountArgs>(
      args?: Subset<T, ProgramPersonnelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramPersonnelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramPersonnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramPersonnelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramPersonnelAggregateArgs>(args: Subset<T, ProgramPersonnelAggregateArgs>): Prisma.PrismaPromise<GetProgramPersonnelAggregateType<T>>

    /**
     * Group by ProgramPersonnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramPersonnelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramPersonnelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramPersonnelGroupByArgs['orderBy'] }
        : { orderBy?: ProgramPersonnelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramPersonnelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramPersonnelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramPersonnel model
   */
  readonly fields: ProgramPersonnelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramPersonnel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramPersonnelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgramPersonnel model
   */
  interface ProgramPersonnelFieldRefs {
    readonly id: FieldRef<"ProgramPersonnel", 'String'>
    readonly userId: FieldRef<"ProgramPersonnel", 'String'>
    readonly programId: FieldRef<"ProgramPersonnel", 'String'>
    readonly assignedAt: FieldRef<"ProgramPersonnel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgramPersonnel findUnique
   */
  export type ProgramPersonnelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * Filter, which ProgramPersonnel to fetch.
     */
    where: ProgramPersonnelWhereUniqueInput
  }

  /**
   * ProgramPersonnel findUniqueOrThrow
   */
  export type ProgramPersonnelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * Filter, which ProgramPersonnel to fetch.
     */
    where: ProgramPersonnelWhereUniqueInput
  }

  /**
   * ProgramPersonnel findFirst
   */
  export type ProgramPersonnelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * Filter, which ProgramPersonnel to fetch.
     */
    where?: ProgramPersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramPersonnels to fetch.
     */
    orderBy?: ProgramPersonnelOrderByWithRelationInput | ProgramPersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramPersonnels.
     */
    cursor?: ProgramPersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramPersonnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramPersonnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramPersonnels.
     */
    distinct?: ProgramPersonnelScalarFieldEnum | ProgramPersonnelScalarFieldEnum[]
  }

  /**
   * ProgramPersonnel findFirstOrThrow
   */
  export type ProgramPersonnelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * Filter, which ProgramPersonnel to fetch.
     */
    where?: ProgramPersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramPersonnels to fetch.
     */
    orderBy?: ProgramPersonnelOrderByWithRelationInput | ProgramPersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramPersonnels.
     */
    cursor?: ProgramPersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramPersonnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramPersonnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramPersonnels.
     */
    distinct?: ProgramPersonnelScalarFieldEnum | ProgramPersonnelScalarFieldEnum[]
  }

  /**
   * ProgramPersonnel findMany
   */
  export type ProgramPersonnelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * Filter, which ProgramPersonnels to fetch.
     */
    where?: ProgramPersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramPersonnels to fetch.
     */
    orderBy?: ProgramPersonnelOrderByWithRelationInput | ProgramPersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramPersonnels.
     */
    cursor?: ProgramPersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramPersonnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramPersonnels.
     */
    skip?: number
    distinct?: ProgramPersonnelScalarFieldEnum | ProgramPersonnelScalarFieldEnum[]
  }

  /**
   * ProgramPersonnel create
   */
  export type ProgramPersonnelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramPersonnel.
     */
    data: XOR<ProgramPersonnelCreateInput, ProgramPersonnelUncheckedCreateInput>
  }

  /**
   * ProgramPersonnel createMany
   */
  export type ProgramPersonnelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramPersonnels.
     */
    data: ProgramPersonnelCreateManyInput | ProgramPersonnelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgramPersonnel createManyAndReturn
   */
  export type ProgramPersonnelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * The data used to create many ProgramPersonnels.
     */
    data: ProgramPersonnelCreateManyInput | ProgramPersonnelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramPersonnel update
   */
  export type ProgramPersonnelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramPersonnel.
     */
    data: XOR<ProgramPersonnelUpdateInput, ProgramPersonnelUncheckedUpdateInput>
    /**
     * Choose, which ProgramPersonnel to update.
     */
    where: ProgramPersonnelWhereUniqueInput
  }

  /**
   * ProgramPersonnel updateMany
   */
  export type ProgramPersonnelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramPersonnels.
     */
    data: XOR<ProgramPersonnelUpdateManyMutationInput, ProgramPersonnelUncheckedUpdateManyInput>
    /**
     * Filter which ProgramPersonnels to update
     */
    where?: ProgramPersonnelWhereInput
    /**
     * Limit how many ProgramPersonnels to update.
     */
    limit?: number
  }

  /**
   * ProgramPersonnel updateManyAndReturn
   */
  export type ProgramPersonnelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * The data used to update ProgramPersonnels.
     */
    data: XOR<ProgramPersonnelUpdateManyMutationInput, ProgramPersonnelUncheckedUpdateManyInput>
    /**
     * Filter which ProgramPersonnels to update
     */
    where?: ProgramPersonnelWhereInput
    /**
     * Limit how many ProgramPersonnels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramPersonnel upsert
   */
  export type ProgramPersonnelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramPersonnel to update in case it exists.
     */
    where: ProgramPersonnelWhereUniqueInput
    /**
     * In case the ProgramPersonnel found by the `where` argument doesn't exist, create a new ProgramPersonnel with this data.
     */
    create: XOR<ProgramPersonnelCreateInput, ProgramPersonnelUncheckedCreateInput>
    /**
     * In case the ProgramPersonnel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramPersonnelUpdateInput, ProgramPersonnelUncheckedUpdateInput>
  }

  /**
   * ProgramPersonnel delete
   */
  export type ProgramPersonnelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
    /**
     * Filter which ProgramPersonnel to delete.
     */
    where: ProgramPersonnelWhereUniqueInput
  }

  /**
   * ProgramPersonnel deleteMany
   */
  export type ProgramPersonnelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramPersonnels to delete
     */
    where?: ProgramPersonnelWhereInput
    /**
     * Limit how many ProgramPersonnels to delete.
     */
    limit?: number
  }

  /**
   * ProgramPersonnel without action
   */
  export type ProgramPersonnelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramPersonnel
     */
    select?: ProgramPersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramPersonnel
     */
    omit?: ProgramPersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramPersonnelInclude<ExtArgs> | null
  }


  /**
   * Model Instrument
   */

  export type AggregateInstrument = {
    _count: InstrumentCountAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  export type InstrumentMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type InstrumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type InstrumentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InstrumentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstrumentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstrumentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InstrumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instrument to aggregate.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instruments
    **/
    _count?: true | InstrumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentMaxAggregateInputType
  }

  export type GetInstrumentAggregateType<T extends InstrumentAggregateArgs> = {
        [P in keyof T & keyof AggregateInstrument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstrument[P]>
      : GetScalarType<T[P], AggregateInstrument[P]>
  }




  export type InstrumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentWhereInput
    orderBy?: InstrumentOrderByWithAggregationInput | InstrumentOrderByWithAggregationInput[]
    by: InstrumentScalarFieldEnum[] | InstrumentScalarFieldEnum
    having?: InstrumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentCountAggregateInputType | true
    _min?: InstrumentMinAggregateInputType
    _max?: InstrumentMaxAggregateInputType
  }

  export type InstrumentGroupByOutputType = {
    id: string
    name: string
    _count: InstrumentCountAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  type GetInstrumentGroupByPayload<T extends InstrumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
        }
      >
    >


  export type InstrumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    area?: boolean | Instrument$areaArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type InstrumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["instrument"]>
  export type InstrumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Instrument$areaArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstrumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstrumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstrumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instrument"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["instrument"]>
    composites: {}
  }

  type InstrumentGetPayload<S extends boolean | null | undefined | InstrumentDefaultArgs> = $Result.GetResult<Prisma.$InstrumentPayload, S>

  type InstrumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstrumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentCountAggregateInputType | true
    }

  export interface InstrumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instrument'], meta: { name: 'Instrument' } }
    /**
     * Find zero or one Instrument that matches the filter.
     * @param {InstrumentFindUniqueArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstrumentFindUniqueArgs>(args: SelectSubset<T, InstrumentFindUniqueArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instrument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstrumentFindUniqueOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstrumentFindUniqueOrThrowArgs>(args: SelectSubset<T, InstrumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstrumentFindFirstArgs>(args?: SelectSubset<T, InstrumentFindFirstArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstrumentFindFirstOrThrowArgs>(args?: SelectSubset<T, InstrumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instruments
     * const instruments = await prisma.instrument.findMany()
     * 
     * // Get first 10 Instruments
     * const instruments = await prisma.instrument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentWithIdOnly = await prisma.instrument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstrumentFindManyArgs>(args?: SelectSubset<T, InstrumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instrument.
     * @param {InstrumentCreateArgs} args - Arguments to create a Instrument.
     * @example
     * // Create one Instrument
     * const Instrument = await prisma.instrument.create({
     *   data: {
     *     // ... data to create a Instrument
     *   }
     * })
     * 
     */
    create<T extends InstrumentCreateArgs>(args: SelectSubset<T, InstrumentCreateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instruments.
     * @param {InstrumentCreateManyArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstrumentCreateManyArgs>(args?: SelectSubset<T, InstrumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instruments and returns the data saved in the database.
     * @param {InstrumentCreateManyAndReturnArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instruments and only return the `id`
     * const instrumentWithIdOnly = await prisma.instrument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstrumentCreateManyAndReturnArgs>(args?: SelectSubset<T, InstrumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instrument.
     * @param {InstrumentDeleteArgs} args - Arguments to delete one Instrument.
     * @example
     * // Delete one Instrument
     * const Instrument = await prisma.instrument.delete({
     *   where: {
     *     // ... filter to delete one Instrument
     *   }
     * })
     * 
     */
    delete<T extends InstrumentDeleteArgs>(args: SelectSubset<T, InstrumentDeleteArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instrument.
     * @param {InstrumentUpdateArgs} args - Arguments to update one Instrument.
     * @example
     * // Update one Instrument
     * const instrument = await prisma.instrument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstrumentUpdateArgs>(args: SelectSubset<T, InstrumentUpdateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instruments.
     * @param {InstrumentDeleteManyArgs} args - Arguments to filter Instruments to delete.
     * @example
     * // Delete a few Instruments
     * const { count } = await prisma.instrument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstrumentDeleteManyArgs>(args?: SelectSubset<T, InstrumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstrumentUpdateManyArgs>(args: SelectSubset<T, InstrumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments and returns the data updated in the database.
     * @param {InstrumentUpdateManyAndReturnArgs} args - Arguments to update many Instruments.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instruments and only return the `id`
     * const instrumentWithIdOnly = await prisma.instrument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstrumentUpdateManyAndReturnArgs>(args: SelectSubset<T, InstrumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instrument.
     * @param {InstrumentUpsertArgs} args - Arguments to update or create a Instrument.
     * @example
     * // Update or create a Instrument
     * const instrument = await prisma.instrument.upsert({
     *   create: {
     *     // ... data to create a Instrument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instrument we want to update
     *   }
     * })
     */
    upsert<T extends InstrumentUpsertArgs>(args: SelectSubset<T, InstrumentUpsertArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentCountArgs} args - Arguments to filter Instruments to count.
     * @example
     * // Count the number of Instruments
     * const count = await prisma.instrument.count({
     *   where: {
     *     // ... the filter for the Instruments we want to count
     *   }
     * })
    **/
    count<T extends InstrumentCountArgs>(
      args?: Subset<T, InstrumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstrumentAggregateArgs>(args: Subset<T, InstrumentAggregateArgs>): Prisma.PrismaPromise<GetInstrumentAggregateType<T>>

    /**
     * Group by Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstrumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstrumentGroupByArgs['orderBy'] }
        : { orderBy?: InstrumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstrumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instrument model
   */
  readonly fields: InstrumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instrument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstrumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends Instrument$areaArgs<ExtArgs> = {}>(args?: Subset<T, Instrument$areaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instrument model
   */
  interface InstrumentFieldRefs {
    readonly id: FieldRef<"Instrument", 'String'>
    readonly name: FieldRef<"Instrument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instrument findUnique
   */
  export type InstrumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findUniqueOrThrow
   */
  export type InstrumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findFirst
   */
  export type InstrumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findFirstOrThrow
   */
  export type InstrumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findMany
   */
  export type InstrumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument create
   */
  export type InstrumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Instrument.
     */
    data: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
  }

  /**
   * Instrument createMany
   */
  export type InstrumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument createManyAndReturn
   */
  export type InstrumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument update
   */
  export type InstrumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Instrument.
     */
    data: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
    /**
     * Choose, which Instrument to update.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument updateMany
   */
  export type InstrumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument updateManyAndReturn
   */
  export type InstrumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument upsert
   */
  export type InstrumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Instrument to update in case it exists.
     */
    where: InstrumentWhereUniqueInput
    /**
     * In case the Instrument found by the `where` argument doesn't exist, create a new Instrument with this data.
     */
    create: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
    /**
     * In case the Instrument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
  }

  /**
   * Instrument delete
   */
  export type InstrumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter which Instrument to delete.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument deleteMany
   */
  export type InstrumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruments to delete
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to delete.
     */
    limit?: number
  }

  /**
   * Instrument.area
   */
  export type Instrument$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Instrument without action
   */
  export type InstrumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
    label: string | null
    instrumentId: string | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
    label: string | null
    instrumentId: string | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    label: number
    instrumentId: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    label?: true
    instrumentId?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    label?: true
    instrumentId?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    label?: true
    instrumentId?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    label: string
    instrumentId: string
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    instrumentId?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    parameter?: boolean | Area$parameterArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    instrumentId?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    instrumentId?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    label?: boolean
    instrumentId?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "instrumentId", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    parameter?: boolean | Area$parameterArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
  }
  export type AreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      instrument: Prisma.$InstrumentPayload<ExtArgs>
      parameter: Prisma.$ParameterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      instrumentId: string
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {AreaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instrument<T extends InstrumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstrumentDefaultArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parameter<T extends Area$parameterArgs<ExtArgs> = {}>(args?: Subset<T, Area$parameterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'Int'>
    readonly label: FieldRef<"Area", 'String'>
    readonly instrumentId: FieldRef<"Area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area updateManyAndReturn
   */
  export type AreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.parameter
   */
  export type Area$parameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    where?: ParameterWhereInput
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    cursor?: ParameterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Parameter
   */

  export type AggregateParameter = {
    _count: ParameterCountAggregateOutputType | null
    _avg: ParameterAvgAggregateOutputType | null
    _sum: ParameterSumAggregateOutputType | null
    _min: ParameterMinAggregateOutputType | null
    _max: ParameterMaxAggregateOutputType | null
  }

  export type ParameterAvgAggregateOutputType = {
    id: number | null
    areaId: number | null
  }

  export type ParameterSumAggregateOutputType = {
    id: number | null
    areaId: number | null
  }

  export type ParameterMinAggregateOutputType = {
    id: number | null
    label: string | null
    areaId: number | null
  }

  export type ParameterMaxAggregateOutputType = {
    id: number | null
    label: string | null
    areaId: number | null
  }

  export type ParameterCountAggregateOutputType = {
    id: number
    label: number
    areaId: number
    _all: number
  }


  export type ParameterAvgAggregateInputType = {
    id?: true
    areaId?: true
  }

  export type ParameterSumAggregateInputType = {
    id?: true
    areaId?: true
  }

  export type ParameterMinAggregateInputType = {
    id?: true
    label?: true
    areaId?: true
  }

  export type ParameterMaxAggregateInputType = {
    id?: true
    label?: true
    areaId?: true
  }

  export type ParameterCountAggregateInputType = {
    id?: true
    label?: true
    areaId?: true
    _all?: true
  }

  export type ParameterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parameter to aggregate.
     */
    where?: ParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parameters
    **/
    _count?: true | ParameterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParameterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParameterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParameterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParameterMaxAggregateInputType
  }

  export type GetParameterAggregateType<T extends ParameterAggregateArgs> = {
        [P in keyof T & keyof AggregateParameter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParameter[P]>
      : GetScalarType<T[P], AggregateParameter[P]>
  }




  export type ParameterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterWhereInput
    orderBy?: ParameterOrderByWithAggregationInput | ParameterOrderByWithAggregationInput[]
    by: ParameterScalarFieldEnum[] | ParameterScalarFieldEnum
    having?: ParameterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParameterCountAggregateInputType | true
    _avg?: ParameterAvgAggregateInputType
    _sum?: ParameterSumAggregateInputType
    _min?: ParameterMinAggregateInputType
    _max?: ParameterMaxAggregateInputType
  }

  export type ParameterGroupByOutputType = {
    id: number
    label: string
    areaId: number
    _count: ParameterCountAggregateOutputType | null
    _avg: ParameterAvgAggregateOutputType | null
    _sum: ParameterSumAggregateOutputType | null
    _min: ParameterMinAggregateOutputType | null
    _max: ParameterMaxAggregateOutputType | null
  }

  type GetParameterGroupByPayload<T extends ParameterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParameterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParameterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParameterGroupByOutputType[P]>
            : GetScalarType<T[P], ParameterGroupByOutputType[P]>
        }
      >
    >


  export type ParameterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    indicator?: boolean | Parameter$indicatorArgs<ExtArgs>
    _count?: boolean | ParameterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectScalar = {
    id?: boolean
    label?: boolean
    areaId?: boolean
  }

  export type ParameterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "areaId", ExtArgs["result"]["parameter"]>
  export type ParameterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    indicator?: boolean | Parameter$indicatorArgs<ExtArgs>
    _count?: boolean | ParameterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParameterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type ParameterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }

  export type $ParameterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parameter"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>
      indicator: Prisma.$IndicatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      areaId: number
    }, ExtArgs["result"]["parameter"]>
    composites: {}
  }

  type ParameterGetPayload<S extends boolean | null | undefined | ParameterDefaultArgs> = $Result.GetResult<Prisma.$ParameterPayload, S>

  type ParameterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParameterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParameterCountAggregateInputType | true
    }

  export interface ParameterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parameter'], meta: { name: 'Parameter' } }
    /**
     * Find zero or one Parameter that matches the filter.
     * @param {ParameterFindUniqueArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParameterFindUniqueArgs>(args: SelectSubset<T, ParameterFindUniqueArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parameter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParameterFindUniqueOrThrowArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParameterFindUniqueOrThrowArgs>(args: SelectSubset<T, ParameterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parameter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterFindFirstArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParameterFindFirstArgs>(args?: SelectSubset<T, ParameterFindFirstArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parameter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterFindFirstOrThrowArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParameterFindFirstOrThrowArgs>(args?: SelectSubset<T, ParameterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parameters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parameters
     * const parameters = await prisma.parameter.findMany()
     * 
     * // Get first 10 Parameters
     * const parameters = await prisma.parameter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parameterWithIdOnly = await prisma.parameter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParameterFindManyArgs>(args?: SelectSubset<T, ParameterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parameter.
     * @param {ParameterCreateArgs} args - Arguments to create a Parameter.
     * @example
     * // Create one Parameter
     * const Parameter = await prisma.parameter.create({
     *   data: {
     *     // ... data to create a Parameter
     *   }
     * })
     * 
     */
    create<T extends ParameterCreateArgs>(args: SelectSubset<T, ParameterCreateArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parameters.
     * @param {ParameterCreateManyArgs} args - Arguments to create many Parameters.
     * @example
     * // Create many Parameters
     * const parameter = await prisma.parameter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParameterCreateManyArgs>(args?: SelectSubset<T, ParameterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parameters and returns the data saved in the database.
     * @param {ParameterCreateManyAndReturnArgs} args - Arguments to create many Parameters.
     * @example
     * // Create many Parameters
     * const parameter = await prisma.parameter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parameters and only return the `id`
     * const parameterWithIdOnly = await prisma.parameter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParameterCreateManyAndReturnArgs>(args?: SelectSubset<T, ParameterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parameter.
     * @param {ParameterDeleteArgs} args - Arguments to delete one Parameter.
     * @example
     * // Delete one Parameter
     * const Parameter = await prisma.parameter.delete({
     *   where: {
     *     // ... filter to delete one Parameter
     *   }
     * })
     * 
     */
    delete<T extends ParameterDeleteArgs>(args: SelectSubset<T, ParameterDeleteArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parameter.
     * @param {ParameterUpdateArgs} args - Arguments to update one Parameter.
     * @example
     * // Update one Parameter
     * const parameter = await prisma.parameter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParameterUpdateArgs>(args: SelectSubset<T, ParameterUpdateArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parameters.
     * @param {ParameterDeleteManyArgs} args - Arguments to filter Parameters to delete.
     * @example
     * // Delete a few Parameters
     * const { count } = await prisma.parameter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParameterDeleteManyArgs>(args?: SelectSubset<T, ParameterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parameters
     * const parameter = await prisma.parameter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParameterUpdateManyArgs>(args: SelectSubset<T, ParameterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parameters and returns the data updated in the database.
     * @param {ParameterUpdateManyAndReturnArgs} args - Arguments to update many Parameters.
     * @example
     * // Update many Parameters
     * const parameter = await prisma.parameter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parameters and only return the `id`
     * const parameterWithIdOnly = await prisma.parameter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParameterUpdateManyAndReturnArgs>(args: SelectSubset<T, ParameterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parameter.
     * @param {ParameterUpsertArgs} args - Arguments to update or create a Parameter.
     * @example
     * // Update or create a Parameter
     * const parameter = await prisma.parameter.upsert({
     *   create: {
     *     // ... data to create a Parameter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parameter we want to update
     *   }
     * })
     */
    upsert<T extends ParameterUpsertArgs>(args: SelectSubset<T, ParameterUpsertArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterCountArgs} args - Arguments to filter Parameters to count.
     * @example
     * // Count the number of Parameters
     * const count = await prisma.parameter.count({
     *   where: {
     *     // ... the filter for the Parameters we want to count
     *   }
     * })
    **/
    count<T extends ParameterCountArgs>(
      args?: Subset<T, ParameterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParameterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParameterAggregateArgs>(args: Subset<T, ParameterAggregateArgs>): Prisma.PrismaPromise<GetParameterAggregateType<T>>

    /**
     * Group by Parameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParameterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParameterGroupByArgs['orderBy'] }
        : { orderBy?: ParameterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParameterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParameterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parameter model
   */
  readonly fields: ParameterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parameter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParameterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    indicator<T extends Parameter$indicatorArgs<ExtArgs> = {}>(args?: Subset<T, Parameter$indicatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parameter model
   */
  interface ParameterFieldRefs {
    readonly id: FieldRef<"Parameter", 'Int'>
    readonly label: FieldRef<"Parameter", 'String'>
    readonly areaId: FieldRef<"Parameter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Parameter findUnique
   */
  export type ParameterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameter to fetch.
     */
    where: ParameterWhereUniqueInput
  }

  /**
   * Parameter findUniqueOrThrow
   */
  export type ParameterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameter to fetch.
     */
    where: ParameterWhereUniqueInput
  }

  /**
   * Parameter findFirst
   */
  export type ParameterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameter to fetch.
     */
    where?: ParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parameters.
     */
    cursor?: ParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parameters.
     */
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Parameter findFirstOrThrow
   */
  export type ParameterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameter to fetch.
     */
    where?: ParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parameters.
     */
    cursor?: ParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parameters.
     */
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Parameter findMany
   */
  export type ParameterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameters to fetch.
     */
    where?: ParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parameters.
     */
    cursor?: ParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Parameter create
   */
  export type ParameterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * The data needed to create a Parameter.
     */
    data: XOR<ParameterCreateInput, ParameterUncheckedCreateInput>
  }

  /**
   * Parameter createMany
   */
  export type ParameterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parameters.
     */
    data: ParameterCreateManyInput | ParameterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parameter createManyAndReturn
   */
  export type ParameterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * The data used to create many Parameters.
     */
    data: ParameterCreateManyInput | ParameterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parameter update
   */
  export type ParameterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * The data needed to update a Parameter.
     */
    data: XOR<ParameterUpdateInput, ParameterUncheckedUpdateInput>
    /**
     * Choose, which Parameter to update.
     */
    where: ParameterWhereUniqueInput
  }

  /**
   * Parameter updateMany
   */
  export type ParameterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parameters.
     */
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyInput>
    /**
     * Filter which Parameters to update
     */
    where?: ParameterWhereInput
    /**
     * Limit how many Parameters to update.
     */
    limit?: number
  }

  /**
   * Parameter updateManyAndReturn
   */
  export type ParameterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * The data used to update Parameters.
     */
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyInput>
    /**
     * Filter which Parameters to update
     */
    where?: ParameterWhereInput
    /**
     * Limit how many Parameters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parameter upsert
   */
  export type ParameterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * The filter to search for the Parameter to update in case it exists.
     */
    where: ParameterWhereUniqueInput
    /**
     * In case the Parameter found by the `where` argument doesn't exist, create a new Parameter with this data.
     */
    create: XOR<ParameterCreateInput, ParameterUncheckedCreateInput>
    /**
     * In case the Parameter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParameterUpdateInput, ParameterUncheckedUpdateInput>
  }

  /**
   * Parameter delete
   */
  export type ParameterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter which Parameter to delete.
     */
    where: ParameterWhereUniqueInput
  }

  /**
   * Parameter deleteMany
   */
  export type ParameterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parameters to delete
     */
    where?: ParameterWhereInput
    /**
     * Limit how many Parameters to delete.
     */
    limit?: number
  }

  /**
   * Parameter.indicator
   */
  export type Parameter$indicatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    where?: IndicatorWhereInput
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    cursor?: IndicatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndicatorScalarFieldEnum | IndicatorScalarFieldEnum[]
  }

  /**
   * Parameter without action
   */
  export type ParameterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
  }


  /**
   * Model Indicator
   */

  export type AggregateIndicator = {
    _count: IndicatorCountAggregateOutputType | null
    _avg: IndicatorAvgAggregateOutputType | null
    _sum: IndicatorSumAggregateOutputType | null
    _min: IndicatorMinAggregateOutputType | null
    _max: IndicatorMaxAggregateOutputType | null
  }

  export type IndicatorAvgAggregateOutputType = {
    id: number | null
    parameterId: number | null
  }

  export type IndicatorSumAggregateOutputType = {
    id: number | null
    parameterId: number | null
  }

  export type IndicatorMinAggregateOutputType = {
    id: number | null
    label: string | null
    description: string | null
    category: $Enums.Category | null
    evidence: string | null
    parameterId: number | null
  }

  export type IndicatorMaxAggregateOutputType = {
    id: number | null
    label: string | null
    description: string | null
    category: $Enums.Category | null
    evidence: string | null
    parameterId: number | null
  }

  export type IndicatorCountAggregateOutputType = {
    id: number
    label: number
    description: number
    category: number
    evidence: number
    parameterId: number
    _all: number
  }


  export type IndicatorAvgAggregateInputType = {
    id?: true
    parameterId?: true
  }

  export type IndicatorSumAggregateInputType = {
    id?: true
    parameterId?: true
  }

  export type IndicatorMinAggregateInputType = {
    id?: true
    label?: true
    description?: true
    category?: true
    evidence?: true
    parameterId?: true
  }

  export type IndicatorMaxAggregateInputType = {
    id?: true
    label?: true
    description?: true
    category?: true
    evidence?: true
    parameterId?: true
  }

  export type IndicatorCountAggregateInputType = {
    id?: true
    label?: true
    description?: true
    category?: true
    evidence?: true
    parameterId?: true
    _all?: true
  }

  export type IndicatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indicator to aggregate.
     */
    where?: IndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators to fetch.
     */
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Indicators
    **/
    _count?: true | IndicatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndicatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndicatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndicatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndicatorMaxAggregateInputType
  }

  export type GetIndicatorAggregateType<T extends IndicatorAggregateArgs> = {
        [P in keyof T & keyof AggregateIndicator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndicator[P]>
      : GetScalarType<T[P], AggregateIndicator[P]>
  }




  export type IndicatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndicatorWhereInput
    orderBy?: IndicatorOrderByWithAggregationInput | IndicatorOrderByWithAggregationInput[]
    by: IndicatorScalarFieldEnum[] | IndicatorScalarFieldEnum
    having?: IndicatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndicatorCountAggregateInputType | true
    _avg?: IndicatorAvgAggregateInputType
    _sum?: IndicatorSumAggregateInputType
    _min?: IndicatorMinAggregateInputType
    _max?: IndicatorMaxAggregateInputType
  }

  export type IndicatorGroupByOutputType = {
    id: number
    label: string
    description: string
    category: $Enums.Category
    evidence: string
    parameterId: number
    _count: IndicatorCountAggregateOutputType | null
    _avg: IndicatorAvgAggregateOutputType | null
    _sum: IndicatorSumAggregateOutputType | null
    _min: IndicatorMinAggregateOutputType | null
    _max: IndicatorMaxAggregateOutputType | null
  }

  type GetIndicatorGroupByPayload<T extends IndicatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndicatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndicatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndicatorGroupByOutputType[P]>
            : GetScalarType<T[P], IndicatorGroupByOutputType[P]>
        }
      >
    >


  export type IndicatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    category?: boolean
    evidence?: boolean
    parameterId?: boolean
    parameter?: boolean | ParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicator"]>

  export type IndicatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    category?: boolean
    evidence?: boolean
    parameterId?: boolean
    parameter?: boolean | ParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicator"]>

  export type IndicatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
    category?: boolean
    evidence?: boolean
    parameterId?: boolean
    parameter?: boolean | ParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicator"]>

  export type IndicatorSelectScalar = {
    id?: boolean
    label?: boolean
    description?: boolean
    category?: boolean
    evidence?: boolean
    parameterId?: boolean
  }

  export type IndicatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "description" | "category" | "evidence" | "parameterId", ExtArgs["result"]["indicator"]>
  export type IndicatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | ParameterDefaultArgs<ExtArgs>
  }
  export type IndicatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | ParameterDefaultArgs<ExtArgs>
  }
  export type IndicatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | ParameterDefaultArgs<ExtArgs>
  }

  export type $IndicatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Indicator"
    objects: {
      parameter: Prisma.$ParameterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      description: string
      category: $Enums.Category
      evidence: string
      parameterId: number
    }, ExtArgs["result"]["indicator"]>
    composites: {}
  }

  type IndicatorGetPayload<S extends boolean | null | undefined | IndicatorDefaultArgs> = $Result.GetResult<Prisma.$IndicatorPayload, S>

  type IndicatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndicatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndicatorCountAggregateInputType | true
    }

  export interface IndicatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Indicator'], meta: { name: 'Indicator' } }
    /**
     * Find zero or one Indicator that matches the filter.
     * @param {IndicatorFindUniqueArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndicatorFindUniqueArgs>(args: SelectSubset<T, IndicatorFindUniqueArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Indicator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndicatorFindUniqueOrThrowArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndicatorFindUniqueOrThrowArgs>(args: SelectSubset<T, IndicatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorFindFirstArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndicatorFindFirstArgs>(args?: SelectSubset<T, IndicatorFindFirstArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorFindFirstOrThrowArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndicatorFindFirstOrThrowArgs>(args?: SelectSubset<T, IndicatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Indicators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indicators
     * const indicators = await prisma.indicator.findMany()
     * 
     * // Get first 10 Indicators
     * const indicators = await prisma.indicator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indicatorWithIdOnly = await prisma.indicator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndicatorFindManyArgs>(args?: SelectSubset<T, IndicatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Indicator.
     * @param {IndicatorCreateArgs} args - Arguments to create a Indicator.
     * @example
     * // Create one Indicator
     * const Indicator = await prisma.indicator.create({
     *   data: {
     *     // ... data to create a Indicator
     *   }
     * })
     * 
     */
    create<T extends IndicatorCreateArgs>(args: SelectSubset<T, IndicatorCreateArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Indicators.
     * @param {IndicatorCreateManyArgs} args - Arguments to create many Indicators.
     * @example
     * // Create many Indicators
     * const indicator = await prisma.indicator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndicatorCreateManyArgs>(args?: SelectSubset<T, IndicatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Indicators and returns the data saved in the database.
     * @param {IndicatorCreateManyAndReturnArgs} args - Arguments to create many Indicators.
     * @example
     * // Create many Indicators
     * const indicator = await prisma.indicator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Indicators and only return the `id`
     * const indicatorWithIdOnly = await prisma.indicator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndicatorCreateManyAndReturnArgs>(args?: SelectSubset<T, IndicatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Indicator.
     * @param {IndicatorDeleteArgs} args - Arguments to delete one Indicator.
     * @example
     * // Delete one Indicator
     * const Indicator = await prisma.indicator.delete({
     *   where: {
     *     // ... filter to delete one Indicator
     *   }
     * })
     * 
     */
    delete<T extends IndicatorDeleteArgs>(args: SelectSubset<T, IndicatorDeleteArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Indicator.
     * @param {IndicatorUpdateArgs} args - Arguments to update one Indicator.
     * @example
     * // Update one Indicator
     * const indicator = await prisma.indicator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndicatorUpdateArgs>(args: SelectSubset<T, IndicatorUpdateArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Indicators.
     * @param {IndicatorDeleteManyArgs} args - Arguments to filter Indicators to delete.
     * @example
     * // Delete a few Indicators
     * const { count } = await prisma.indicator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndicatorDeleteManyArgs>(args?: SelectSubset<T, IndicatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indicators
     * const indicator = await prisma.indicator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndicatorUpdateManyArgs>(args: SelectSubset<T, IndicatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indicators and returns the data updated in the database.
     * @param {IndicatorUpdateManyAndReturnArgs} args - Arguments to update many Indicators.
     * @example
     * // Update many Indicators
     * const indicator = await prisma.indicator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Indicators and only return the `id`
     * const indicatorWithIdOnly = await prisma.indicator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndicatorUpdateManyAndReturnArgs>(args: SelectSubset<T, IndicatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Indicator.
     * @param {IndicatorUpsertArgs} args - Arguments to update or create a Indicator.
     * @example
     * // Update or create a Indicator
     * const indicator = await prisma.indicator.upsert({
     *   create: {
     *     // ... data to create a Indicator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Indicator we want to update
     *   }
     * })
     */
    upsert<T extends IndicatorUpsertArgs>(args: SelectSubset<T, IndicatorUpsertArgs<ExtArgs>>): Prisma__IndicatorClient<$Result.GetResult<Prisma.$IndicatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Indicators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorCountArgs} args - Arguments to filter Indicators to count.
     * @example
     * // Count the number of Indicators
     * const count = await prisma.indicator.count({
     *   where: {
     *     // ... the filter for the Indicators we want to count
     *   }
     * })
    **/
    count<T extends IndicatorCountArgs>(
      args?: Subset<T, IndicatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndicatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Indicator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndicatorAggregateArgs>(args: Subset<T, IndicatorAggregateArgs>): Prisma.PrismaPromise<GetIndicatorAggregateType<T>>

    /**
     * Group by Indicator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndicatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndicatorGroupByArgs['orderBy'] }
        : { orderBy?: IndicatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndicatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndicatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Indicator model
   */
  readonly fields: IndicatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Indicator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndicatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parameter<T extends ParameterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParameterDefaultArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Indicator model
   */
  interface IndicatorFieldRefs {
    readonly id: FieldRef<"Indicator", 'Int'>
    readonly label: FieldRef<"Indicator", 'String'>
    readonly description: FieldRef<"Indicator", 'String'>
    readonly category: FieldRef<"Indicator", 'Category'>
    readonly evidence: FieldRef<"Indicator", 'String'>
    readonly parameterId: FieldRef<"Indicator", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Indicator findUnique
   */
  export type IndicatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicator to fetch.
     */
    where: IndicatorWhereUniqueInput
  }

  /**
   * Indicator findUniqueOrThrow
   */
  export type IndicatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicator to fetch.
     */
    where: IndicatorWhereUniqueInput
  }

  /**
   * Indicator findFirst
   */
  export type IndicatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicator to fetch.
     */
    where?: IndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators to fetch.
     */
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicators.
     */
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indicators.
     */
    distinct?: IndicatorScalarFieldEnum | IndicatorScalarFieldEnum[]
  }

  /**
   * Indicator findFirstOrThrow
   */
  export type IndicatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicator to fetch.
     */
    where?: IndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators to fetch.
     */
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicators.
     */
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indicators.
     */
    distinct?: IndicatorScalarFieldEnum | IndicatorScalarFieldEnum[]
  }

  /**
   * Indicator findMany
   */
  export type IndicatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter, which Indicators to fetch.
     */
    where?: IndicatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicators to fetch.
     */
    orderBy?: IndicatorOrderByWithRelationInput | IndicatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Indicators.
     */
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
     */
    skip?: number
    distinct?: IndicatorScalarFieldEnum | IndicatorScalarFieldEnum[]
  }

  /**
   * Indicator create
   */
  export type IndicatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Indicator.
     */
    data: XOR<IndicatorCreateInput, IndicatorUncheckedCreateInput>
  }

  /**
   * Indicator createMany
   */
  export type IndicatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Indicators.
     */
    data: IndicatorCreateManyInput | IndicatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Indicator createManyAndReturn
   */
  export type IndicatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * The data used to create many Indicators.
     */
    data: IndicatorCreateManyInput | IndicatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Indicator update
   */
  export type IndicatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Indicator.
     */
    data: XOR<IndicatorUpdateInput, IndicatorUncheckedUpdateInput>
    /**
     * Choose, which Indicator to update.
     */
    where: IndicatorWhereUniqueInput
  }

  /**
   * Indicator updateMany
   */
  export type IndicatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Indicators.
     */
    data: XOR<IndicatorUpdateManyMutationInput, IndicatorUncheckedUpdateManyInput>
    /**
     * Filter which Indicators to update
     */
    where?: IndicatorWhereInput
    /**
     * Limit how many Indicators to update.
     */
    limit?: number
  }

  /**
   * Indicator updateManyAndReturn
   */
  export type IndicatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * The data used to update Indicators.
     */
    data: XOR<IndicatorUpdateManyMutationInput, IndicatorUncheckedUpdateManyInput>
    /**
     * Filter which Indicators to update
     */
    where?: IndicatorWhereInput
    /**
     * Limit how many Indicators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Indicator upsert
   */
  export type IndicatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Indicator to update in case it exists.
     */
    where: IndicatorWhereUniqueInput
    /**
     * In case the Indicator found by the `where` argument doesn't exist, create a new Indicator with this data.
     */
    create: XOR<IndicatorCreateInput, IndicatorUncheckedCreateInput>
    /**
     * In case the Indicator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndicatorUpdateInput, IndicatorUncheckedUpdateInput>
  }

  /**
   * Indicator delete
   */
  export type IndicatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
    /**
     * Filter which Indicator to delete.
     */
    where: IndicatorWhereUniqueInput
  }

  /**
   * Indicator deleteMany
   */
  export type IndicatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indicators to delete
     */
    where?: IndicatorWhereInput
    /**
     * Limit how many Indicators to delete.
     */
    limit?: number
  }

  /**
   * Indicator without action
   */
  export type IndicatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicator
     */
    select?: IndicatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicator
     */
    omit?: IndicatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    hashedPassword: 'hashedPassword',
    photoURL: 'photoURL',
    address: 'address',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const ProgramPersonnelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    programId: 'programId',
    assignedAt: 'assignedAt'
  };

  export type ProgramPersonnelScalarFieldEnum = (typeof ProgramPersonnelScalarFieldEnum)[keyof typeof ProgramPersonnelScalarFieldEnum]


  export const InstrumentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InstrumentScalarFieldEnum = (typeof InstrumentScalarFieldEnum)[keyof typeof InstrumentScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    label: 'label',
    instrumentId: 'instrumentId'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const ParameterScalarFieldEnum: {
    id: 'id',
    label: 'label',
    areaId: 'areaId'
  };

  export type ParameterScalarFieldEnum = (typeof ParameterScalarFieldEnum)[keyof typeof ParameterScalarFieldEnum]


  export const IndicatorScalarFieldEnum: {
    id: 'id',
    label: 'label',
    description: 'description',
    category: 'category',
    evidence: 'evidence',
    parameterId: 'parameterId'
  };

  export type IndicatorScalarFieldEnum = (typeof IndicatorScalarFieldEnum)[keyof typeof IndicatorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    photoURL?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    programPersonnel?: ProgramPersonnelListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    photoURL?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programPersonnel?: ProgramPersonnelOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    photoURL?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    programPersonnel?: ProgramPersonnelListRelationFilter
  }, "id" | "phoneNumber" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    photoURL?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    photoURL?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: StringFilter<"Program"> | string
    name?: StringFilter<"Program"> | string
    code?: StringFilter<"Program"> | string
    department?: StringFilter<"Program"> | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    programPersonnel?: ProgramPersonnelListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    programPersonnel?: ProgramPersonnelOrderByRelationAggregateInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_code?: ProgramNameCodeCompoundUniqueInput
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    name?: StringFilter<"Program"> | string
    code?: StringFilter<"Program"> | string
    department?: StringFilter<"Program"> | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    programPersonnel?: ProgramPersonnelListRelationFilter
  }, "id" | "name_code">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Program"> | string
    name?: StringWithAggregatesFilter<"Program"> | string
    code?: StringWithAggregatesFilter<"Program"> | string
    department?: StringWithAggregatesFilter<"Program"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
  }

  export type ProgramPersonnelWhereInput = {
    AND?: ProgramPersonnelWhereInput | ProgramPersonnelWhereInput[]
    OR?: ProgramPersonnelWhereInput[]
    NOT?: ProgramPersonnelWhereInput | ProgramPersonnelWhereInput[]
    id?: StringFilter<"ProgramPersonnel"> | string
    userId?: StringFilter<"ProgramPersonnel"> | string
    programId?: StringFilter<"ProgramPersonnel"> | string
    assignedAt?: DateTimeFilter<"ProgramPersonnel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }

  export type ProgramPersonnelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    programId?: SortOrder
    assignedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    program?: ProgramOrderByWithRelationInput
  }

  export type ProgramPersonnelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_programId?: ProgramPersonnelUserIdProgramIdCompoundUniqueInput
    AND?: ProgramPersonnelWhereInput | ProgramPersonnelWhereInput[]
    OR?: ProgramPersonnelWhereInput[]
    NOT?: ProgramPersonnelWhereInput | ProgramPersonnelWhereInput[]
    userId?: StringFilter<"ProgramPersonnel"> | string
    programId?: StringFilter<"ProgramPersonnel"> | string
    assignedAt?: DateTimeFilter<"ProgramPersonnel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }, "id" | "userId_programId">

  export type ProgramPersonnelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    programId?: SortOrder
    assignedAt?: SortOrder
    _count?: ProgramPersonnelCountOrderByAggregateInput
    _max?: ProgramPersonnelMaxOrderByAggregateInput
    _min?: ProgramPersonnelMinOrderByAggregateInput
  }

  export type ProgramPersonnelScalarWhereWithAggregatesInput = {
    AND?: ProgramPersonnelScalarWhereWithAggregatesInput | ProgramPersonnelScalarWhereWithAggregatesInput[]
    OR?: ProgramPersonnelScalarWhereWithAggregatesInput[]
    NOT?: ProgramPersonnelScalarWhereWithAggregatesInput | ProgramPersonnelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgramPersonnel"> | string
    userId?: StringWithAggregatesFilter<"ProgramPersonnel"> | string
    programId?: StringWithAggregatesFilter<"ProgramPersonnel"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"ProgramPersonnel"> | Date | string
  }

  export type InstrumentWhereInput = {
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    id?: StringFilter<"Instrument"> | string
    name?: StringFilter<"Instrument"> | string
    area?: AreaListRelationFilter
  }

  export type InstrumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    area?: AreaOrderByRelationAggregateInput
  }

  export type InstrumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    name?: StringFilter<"Instrument"> | string
    area?: AreaListRelationFilter
  }, "id">

  export type InstrumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: InstrumentCountOrderByAggregateInput
    _max?: InstrumentMaxOrderByAggregateInput
    _min?: InstrumentMinOrderByAggregateInput
  }

  export type InstrumentScalarWhereWithAggregatesInput = {
    AND?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    OR?: InstrumentScalarWhereWithAggregatesInput[]
    NOT?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instrument"> | string
    name?: StringWithAggregatesFilter<"Instrument"> | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: IntFilter<"Area"> | number
    label?: StringFilter<"Area"> | string
    instrumentId?: StringFilter<"Area"> | string
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    parameter?: ParameterListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    instrumentId?: SortOrder
    instrument?: InstrumentOrderByWithRelationInput
    parameter?: ParameterOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    label?: StringFilter<"Area"> | string
    instrumentId?: StringFilter<"Area"> | string
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    parameter?: ParameterListRelationFilter
  }, "id">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    instrumentId?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Area"> | number
    label?: StringWithAggregatesFilter<"Area"> | string
    instrumentId?: StringWithAggregatesFilter<"Area"> | string
  }

  export type ParameterWhereInput = {
    AND?: ParameterWhereInput | ParameterWhereInput[]
    OR?: ParameterWhereInput[]
    NOT?: ParameterWhereInput | ParameterWhereInput[]
    id?: IntFilter<"Parameter"> | number
    label?: StringFilter<"Parameter"> | string
    areaId?: IntFilter<"Parameter"> | number
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    indicator?: IndicatorListRelationFilter
  }

  export type ParameterOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    areaId?: SortOrder
    area?: AreaOrderByWithRelationInput
    indicator?: IndicatorOrderByRelationAggregateInput
  }

  export type ParameterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParameterWhereInput | ParameterWhereInput[]
    OR?: ParameterWhereInput[]
    NOT?: ParameterWhereInput | ParameterWhereInput[]
    label?: StringFilter<"Parameter"> | string
    areaId?: IntFilter<"Parameter"> | number
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    indicator?: IndicatorListRelationFilter
  }, "id">

  export type ParameterOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    areaId?: SortOrder
    _count?: ParameterCountOrderByAggregateInput
    _avg?: ParameterAvgOrderByAggregateInput
    _max?: ParameterMaxOrderByAggregateInput
    _min?: ParameterMinOrderByAggregateInput
    _sum?: ParameterSumOrderByAggregateInput
  }

  export type ParameterScalarWhereWithAggregatesInput = {
    AND?: ParameterScalarWhereWithAggregatesInput | ParameterScalarWhereWithAggregatesInput[]
    OR?: ParameterScalarWhereWithAggregatesInput[]
    NOT?: ParameterScalarWhereWithAggregatesInput | ParameterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parameter"> | number
    label?: StringWithAggregatesFilter<"Parameter"> | string
    areaId?: IntWithAggregatesFilter<"Parameter"> | number
  }

  export type IndicatorWhereInput = {
    AND?: IndicatorWhereInput | IndicatorWhereInput[]
    OR?: IndicatorWhereInput[]
    NOT?: IndicatorWhereInput | IndicatorWhereInput[]
    id?: IntFilter<"Indicator"> | number
    label?: StringFilter<"Indicator"> | string
    description?: StringFilter<"Indicator"> | string
    category?: EnumCategoryFilter<"Indicator"> | $Enums.Category
    evidence?: StringFilter<"Indicator"> | string
    parameterId?: IntFilter<"Indicator"> | number
    parameter?: XOR<ParameterScalarRelationFilter, ParameterWhereInput>
  }

  export type IndicatorOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    category?: SortOrder
    evidence?: SortOrder
    parameterId?: SortOrder
    parameter?: ParameterOrderByWithRelationInput
  }

  export type IndicatorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IndicatorWhereInput | IndicatorWhereInput[]
    OR?: IndicatorWhereInput[]
    NOT?: IndicatorWhereInput | IndicatorWhereInput[]
    label?: StringFilter<"Indicator"> | string
    description?: StringFilter<"Indicator"> | string
    category?: EnumCategoryFilter<"Indicator"> | $Enums.Category
    evidence?: StringFilter<"Indicator"> | string
    parameterId?: IntFilter<"Indicator"> | number
    parameter?: XOR<ParameterScalarRelationFilter, ParameterWhereInput>
  }, "id">

  export type IndicatorOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    category?: SortOrder
    evidence?: SortOrder
    parameterId?: SortOrder
    _count?: IndicatorCountOrderByAggregateInput
    _avg?: IndicatorAvgOrderByAggregateInput
    _max?: IndicatorMaxOrderByAggregateInput
    _min?: IndicatorMinOrderByAggregateInput
    _sum?: IndicatorSumOrderByAggregateInput
  }

  export type IndicatorScalarWhereWithAggregatesInput = {
    AND?: IndicatorScalarWhereWithAggregatesInput | IndicatorScalarWhereWithAggregatesInput[]
    OR?: IndicatorScalarWhereWithAggregatesInput[]
    NOT?: IndicatorScalarWhereWithAggregatesInput | IndicatorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Indicator"> | number
    label?: StringWithAggregatesFilter<"Indicator"> | string
    description?: StringWithAggregatesFilter<"Indicator"> | string
    category?: EnumCategoryWithAggregatesFilter<"Indicator"> | $Enums.Category
    evidence?: StringWithAggregatesFilter<"Indicator"> | string
    parameterId?: IntWithAggregatesFilter<"Indicator"> | number
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    hashedPassword: string
    photoURL?: string | null
    address?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    programPersonnel?: ProgramPersonnelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    hashedPassword: string
    photoURL?: string | null
    address?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    programPersonnel?: ProgramPersonnelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programPersonnel?: ProgramPersonnelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programPersonnel?: ProgramPersonnelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    hashedPassword: string
    photoURL?: string | null
    address?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateInput = {
    id?: string
    name: string
    code: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    programPersonnel?: ProgramPersonnelCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    programPersonnel?: ProgramPersonnelUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programPersonnel?: ProgramPersonnelUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programPersonnel?: ProgramPersonnelUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: string
    name: string
    code: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramPersonnelCreateInput = {
    id?: string
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutProgramPersonnelInput
    program: ProgramCreateNestedOneWithoutProgramPersonnelInput
  }

  export type ProgramPersonnelUncheckedCreateInput = {
    id?: string
    userId: string
    programId: string
    assignedAt?: Date | string
  }

  export type ProgramPersonnelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgramPersonnelNestedInput
    program?: ProgramUpdateOneRequiredWithoutProgramPersonnelNestedInput
  }

  export type ProgramPersonnelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramPersonnelCreateManyInput = {
    id?: string
    userId: string
    programId: string
    assignedAt?: Date | string
  }

  export type ProgramPersonnelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramPersonnelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentCreateInput = {
    id?: string
    name: string
    area?: AreaCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUncheckedCreateInput = {
    id?: string
    name: string
    area?: AreaUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: AreaUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentCreateManyInput = {
    id?: string
    name: string
  }

  export type InstrumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstrumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AreaCreateInput = {
    label: string
    instrument: InstrumentCreateNestedOneWithoutAreaInput
    parameter?: ParameterCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: number
    label: string
    instrumentId: string
    parameter?: ParameterUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    instrument?: InstrumentUpdateOneRequiredWithoutAreaNestedInput
    parameter?: ParameterUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    parameter?: ParameterUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: number
    label: string
    instrumentId: string
  }

  export type AreaUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type ParameterCreateInput = {
    label: string
    area: AreaCreateNestedOneWithoutParameterInput
    indicator?: IndicatorCreateNestedManyWithoutParameterInput
  }

  export type ParameterUncheckedCreateInput = {
    id?: number
    label: string
    areaId: number
    indicator?: IndicatorUncheckedCreateNestedManyWithoutParameterInput
  }

  export type ParameterUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutParameterNestedInput
    indicator?: IndicatorUpdateManyWithoutParameterNestedInput
  }

  export type ParameterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
    indicator?: IndicatorUncheckedUpdateManyWithoutParameterNestedInput
  }

  export type ParameterCreateManyInput = {
    id?: number
    label: string
    areaId: number
  }

  export type ParameterUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ParameterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type IndicatorCreateInput = {
    label: string
    description: string
    category: $Enums.Category
    evidence: string
    parameter: ParameterCreateNestedOneWithoutIndicatorInput
  }

  export type IndicatorUncheckedCreateInput = {
    id?: number
    label: string
    description: string
    category: $Enums.Category
    evidence: string
    parameterId: number
  }

  export type IndicatorUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    evidence?: StringFieldUpdateOperationsInput | string
    parameter?: ParameterUpdateOneRequiredWithoutIndicatorNestedInput
  }

  export type IndicatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    evidence?: StringFieldUpdateOperationsInput | string
    parameterId?: IntFieldUpdateOperationsInput | number
  }

  export type IndicatorCreateManyInput = {
    id?: number
    label: string
    description: string
    category: $Enums.Category
    evidence: string
    parameterId: number
  }

  export type IndicatorUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    evidence?: StringFieldUpdateOperationsInput | string
  }

  export type IndicatorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    evidence?: StringFieldUpdateOperationsInput | string
    parameterId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProgramPersonnelListRelationFilter = {
    every?: ProgramPersonnelWhereInput
    some?: ProgramPersonnelWhereInput
    none?: ProgramPersonnelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgramPersonnelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    photoURL?: SortOrder
    address?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    photoURL?: SortOrder
    address?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    photoURL?: SortOrder
    address?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProgramNameCodeCompoundUniqueInput = {
    name: string
    code: string
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProgramScalarRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type ProgramPersonnelUserIdProgramIdCompoundUniqueInput = {
    userId: string
    programId: string
  }

  export type ProgramPersonnelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    programId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ProgramPersonnelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    programId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ProgramPersonnelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    programId?: SortOrder
    assignedAt?: SortOrder
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstrumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstrumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstrumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type InstrumentScalarRelationFilter = {
    is?: InstrumentWhereInput
    isNot?: InstrumentWhereInput
  }

  export type ParameterListRelationFilter = {
    every?: ParameterWhereInput
    some?: ParameterWhereInput
    none?: ParameterWhereInput
  }

  export type ParameterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    instrumentId?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    instrumentId?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    instrumentId?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type IndicatorListRelationFilter = {
    every?: IndicatorWhereInput
    some?: IndicatorWhereInput
    none?: IndicatorWhereInput
  }

  export type IndicatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParameterCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    areaId?: SortOrder
  }

  export type ParameterAvgOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
  }

  export type ParameterMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    areaId?: SortOrder
  }

  export type ParameterMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    areaId?: SortOrder
  }

  export type ParameterSumOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type ParameterScalarRelationFilter = {
    is?: ParameterWhereInput
    isNot?: ParameterWhereInput
  }

  export type IndicatorCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    category?: SortOrder
    evidence?: SortOrder
    parameterId?: SortOrder
  }

  export type IndicatorAvgOrderByAggregateInput = {
    id?: SortOrder
    parameterId?: SortOrder
  }

  export type IndicatorMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    category?: SortOrder
    evidence?: SortOrder
    parameterId?: SortOrder
  }

  export type IndicatorMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    category?: SortOrder
    evidence?: SortOrder
    parameterId?: SortOrder
  }

  export type IndicatorSumOrderByAggregateInput = {
    id?: SortOrder
    parameterId?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type ProgramPersonnelCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramPersonnelCreateWithoutUserInput, ProgramPersonnelUncheckedCreateWithoutUserInput> | ProgramPersonnelCreateWithoutUserInput[] | ProgramPersonnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramPersonnelCreateOrConnectWithoutUserInput | ProgramPersonnelCreateOrConnectWithoutUserInput[]
    createMany?: ProgramPersonnelCreateManyUserInputEnvelope
    connect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
  }

  export type ProgramPersonnelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramPersonnelCreateWithoutUserInput, ProgramPersonnelUncheckedCreateWithoutUserInput> | ProgramPersonnelCreateWithoutUserInput[] | ProgramPersonnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramPersonnelCreateOrConnectWithoutUserInput | ProgramPersonnelCreateOrConnectWithoutUserInput[]
    createMany?: ProgramPersonnelCreateManyUserInputEnvelope
    connect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProgramPersonnelUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramPersonnelCreateWithoutUserInput, ProgramPersonnelUncheckedCreateWithoutUserInput> | ProgramPersonnelCreateWithoutUserInput[] | ProgramPersonnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramPersonnelCreateOrConnectWithoutUserInput | ProgramPersonnelCreateOrConnectWithoutUserInput[]
    upsert?: ProgramPersonnelUpsertWithWhereUniqueWithoutUserInput | ProgramPersonnelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramPersonnelCreateManyUserInputEnvelope
    set?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    disconnect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    delete?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    connect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    update?: ProgramPersonnelUpdateWithWhereUniqueWithoutUserInput | ProgramPersonnelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramPersonnelUpdateManyWithWhereWithoutUserInput | ProgramPersonnelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramPersonnelScalarWhereInput | ProgramPersonnelScalarWhereInput[]
  }

  export type ProgramPersonnelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramPersonnelCreateWithoutUserInput, ProgramPersonnelUncheckedCreateWithoutUserInput> | ProgramPersonnelCreateWithoutUserInput[] | ProgramPersonnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramPersonnelCreateOrConnectWithoutUserInput | ProgramPersonnelCreateOrConnectWithoutUserInput[]
    upsert?: ProgramPersonnelUpsertWithWhereUniqueWithoutUserInput | ProgramPersonnelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramPersonnelCreateManyUserInputEnvelope
    set?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    disconnect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    delete?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    connect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    update?: ProgramPersonnelUpdateWithWhereUniqueWithoutUserInput | ProgramPersonnelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramPersonnelUpdateManyWithWhereWithoutUserInput | ProgramPersonnelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramPersonnelScalarWhereInput | ProgramPersonnelScalarWhereInput[]
  }

  export type ProgramPersonnelCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramPersonnelCreateWithoutProgramInput, ProgramPersonnelUncheckedCreateWithoutProgramInput> | ProgramPersonnelCreateWithoutProgramInput[] | ProgramPersonnelUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramPersonnelCreateOrConnectWithoutProgramInput | ProgramPersonnelCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramPersonnelCreateManyProgramInputEnvelope
    connect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
  }

  export type ProgramPersonnelUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramPersonnelCreateWithoutProgramInput, ProgramPersonnelUncheckedCreateWithoutProgramInput> | ProgramPersonnelCreateWithoutProgramInput[] | ProgramPersonnelUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramPersonnelCreateOrConnectWithoutProgramInput | ProgramPersonnelCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramPersonnelCreateManyProgramInputEnvelope
    connect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
  }

  export type ProgramPersonnelUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramPersonnelCreateWithoutProgramInput, ProgramPersonnelUncheckedCreateWithoutProgramInput> | ProgramPersonnelCreateWithoutProgramInput[] | ProgramPersonnelUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramPersonnelCreateOrConnectWithoutProgramInput | ProgramPersonnelCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramPersonnelUpsertWithWhereUniqueWithoutProgramInput | ProgramPersonnelUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramPersonnelCreateManyProgramInputEnvelope
    set?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    disconnect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    delete?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    connect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    update?: ProgramPersonnelUpdateWithWhereUniqueWithoutProgramInput | ProgramPersonnelUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramPersonnelUpdateManyWithWhereWithoutProgramInput | ProgramPersonnelUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramPersonnelScalarWhereInput | ProgramPersonnelScalarWhereInput[]
  }

  export type ProgramPersonnelUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramPersonnelCreateWithoutProgramInput, ProgramPersonnelUncheckedCreateWithoutProgramInput> | ProgramPersonnelCreateWithoutProgramInput[] | ProgramPersonnelUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramPersonnelCreateOrConnectWithoutProgramInput | ProgramPersonnelCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramPersonnelUpsertWithWhereUniqueWithoutProgramInput | ProgramPersonnelUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramPersonnelCreateManyProgramInputEnvelope
    set?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    disconnect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    delete?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    connect?: ProgramPersonnelWhereUniqueInput | ProgramPersonnelWhereUniqueInput[]
    update?: ProgramPersonnelUpdateWithWhereUniqueWithoutProgramInput | ProgramPersonnelUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramPersonnelUpdateManyWithWhereWithoutProgramInput | ProgramPersonnelUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramPersonnelScalarWhereInput | ProgramPersonnelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProgramPersonnelInput = {
    create?: XOR<UserCreateWithoutProgramPersonnelInput, UserUncheckedCreateWithoutProgramPersonnelInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramPersonnelInput
    connect?: UserWhereUniqueInput
  }

  export type ProgramCreateNestedOneWithoutProgramPersonnelInput = {
    create?: XOR<ProgramCreateWithoutProgramPersonnelInput, ProgramUncheckedCreateWithoutProgramPersonnelInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramPersonnelInput
    connect?: ProgramWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgramPersonnelNestedInput = {
    create?: XOR<UserCreateWithoutProgramPersonnelInput, UserUncheckedCreateWithoutProgramPersonnelInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramPersonnelInput
    upsert?: UserUpsertWithoutProgramPersonnelInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgramPersonnelInput, UserUpdateWithoutProgramPersonnelInput>, UserUncheckedUpdateWithoutProgramPersonnelInput>
  }

  export type ProgramUpdateOneRequiredWithoutProgramPersonnelNestedInput = {
    create?: XOR<ProgramCreateWithoutProgramPersonnelInput, ProgramUncheckedCreateWithoutProgramPersonnelInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramPersonnelInput
    upsert?: ProgramUpsertWithoutProgramPersonnelInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutProgramPersonnelInput, ProgramUpdateWithoutProgramPersonnelInput>, ProgramUncheckedUpdateWithoutProgramPersonnelInput>
  }

  export type AreaCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<AreaCreateWithoutInstrumentInput, AreaUncheckedCreateWithoutInstrumentInput> | AreaCreateWithoutInstrumentInput[] | AreaUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutInstrumentInput | AreaCreateOrConnectWithoutInstrumentInput[]
    createMany?: AreaCreateManyInstrumentInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<AreaCreateWithoutInstrumentInput, AreaUncheckedCreateWithoutInstrumentInput> | AreaCreateWithoutInstrumentInput[] | AreaUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutInstrumentInput | AreaCreateOrConnectWithoutInstrumentInput[]
    createMany?: AreaCreateManyInstrumentInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AreaUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<AreaCreateWithoutInstrumentInput, AreaUncheckedCreateWithoutInstrumentInput> | AreaCreateWithoutInstrumentInput[] | AreaUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutInstrumentInput | AreaCreateOrConnectWithoutInstrumentInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutInstrumentInput | AreaUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: AreaCreateManyInstrumentInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutInstrumentInput | AreaUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutInstrumentInput | AreaUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<AreaCreateWithoutInstrumentInput, AreaUncheckedCreateWithoutInstrumentInput> | AreaCreateWithoutInstrumentInput[] | AreaUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutInstrumentInput | AreaCreateOrConnectWithoutInstrumentInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutInstrumentInput | AreaUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: AreaCreateManyInstrumentInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutInstrumentInput | AreaUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutInstrumentInput | AreaUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type InstrumentCreateNestedOneWithoutAreaInput = {
    create?: XOR<InstrumentCreateWithoutAreaInput, InstrumentUncheckedCreateWithoutAreaInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutAreaInput
    connect?: InstrumentWhereUniqueInput
  }

  export type ParameterCreateNestedManyWithoutAreaInput = {
    create?: XOR<ParameterCreateWithoutAreaInput, ParameterUncheckedCreateWithoutAreaInput> | ParameterCreateWithoutAreaInput[] | ParameterUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutAreaInput | ParameterCreateOrConnectWithoutAreaInput[]
    createMany?: ParameterCreateManyAreaInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type ParameterUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<ParameterCreateWithoutAreaInput, ParameterUncheckedCreateWithoutAreaInput> | ParameterCreateWithoutAreaInput[] | ParameterUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutAreaInput | ParameterCreateOrConnectWithoutAreaInput[]
    createMany?: ParameterCreateManyAreaInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type InstrumentUpdateOneRequiredWithoutAreaNestedInput = {
    create?: XOR<InstrumentCreateWithoutAreaInput, InstrumentUncheckedCreateWithoutAreaInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutAreaInput
    upsert?: InstrumentUpsertWithoutAreaInput
    connect?: InstrumentWhereUniqueInput
    update?: XOR<XOR<InstrumentUpdateToOneWithWhereWithoutAreaInput, InstrumentUpdateWithoutAreaInput>, InstrumentUncheckedUpdateWithoutAreaInput>
  }

  export type ParameterUpdateManyWithoutAreaNestedInput = {
    create?: XOR<ParameterCreateWithoutAreaInput, ParameterUncheckedCreateWithoutAreaInput> | ParameterCreateWithoutAreaInput[] | ParameterUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutAreaInput | ParameterCreateOrConnectWithoutAreaInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutAreaInput | ParameterUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: ParameterCreateManyAreaInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutAreaInput | ParameterUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutAreaInput | ParameterUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParameterUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<ParameterCreateWithoutAreaInput, ParameterUncheckedCreateWithoutAreaInput> | ParameterCreateWithoutAreaInput[] | ParameterUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutAreaInput | ParameterCreateOrConnectWithoutAreaInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutAreaInput | ParameterUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: ParameterCreateManyAreaInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutAreaInput | ParameterUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutAreaInput | ParameterUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutParameterInput = {
    create?: XOR<AreaCreateWithoutParameterInput, AreaUncheckedCreateWithoutParameterInput>
    connectOrCreate?: AreaCreateOrConnectWithoutParameterInput
    connect?: AreaWhereUniqueInput
  }

  export type IndicatorCreateNestedManyWithoutParameterInput = {
    create?: XOR<IndicatorCreateWithoutParameterInput, IndicatorUncheckedCreateWithoutParameterInput> | IndicatorCreateWithoutParameterInput[] | IndicatorUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: IndicatorCreateOrConnectWithoutParameterInput | IndicatorCreateOrConnectWithoutParameterInput[]
    createMany?: IndicatorCreateManyParameterInputEnvelope
    connect?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
  }

  export type IndicatorUncheckedCreateNestedManyWithoutParameterInput = {
    create?: XOR<IndicatorCreateWithoutParameterInput, IndicatorUncheckedCreateWithoutParameterInput> | IndicatorCreateWithoutParameterInput[] | IndicatorUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: IndicatorCreateOrConnectWithoutParameterInput | IndicatorCreateOrConnectWithoutParameterInput[]
    createMany?: IndicatorCreateManyParameterInputEnvelope
    connect?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
  }

  export type AreaUpdateOneRequiredWithoutParameterNestedInput = {
    create?: XOR<AreaCreateWithoutParameterInput, AreaUncheckedCreateWithoutParameterInput>
    connectOrCreate?: AreaCreateOrConnectWithoutParameterInput
    upsert?: AreaUpsertWithoutParameterInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutParameterInput, AreaUpdateWithoutParameterInput>, AreaUncheckedUpdateWithoutParameterInput>
  }

  export type IndicatorUpdateManyWithoutParameterNestedInput = {
    create?: XOR<IndicatorCreateWithoutParameterInput, IndicatorUncheckedCreateWithoutParameterInput> | IndicatorCreateWithoutParameterInput[] | IndicatorUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: IndicatorCreateOrConnectWithoutParameterInput | IndicatorCreateOrConnectWithoutParameterInput[]
    upsert?: IndicatorUpsertWithWhereUniqueWithoutParameterInput | IndicatorUpsertWithWhereUniqueWithoutParameterInput[]
    createMany?: IndicatorCreateManyParameterInputEnvelope
    set?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
    disconnect?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
    delete?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
    connect?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
    update?: IndicatorUpdateWithWhereUniqueWithoutParameterInput | IndicatorUpdateWithWhereUniqueWithoutParameterInput[]
    updateMany?: IndicatorUpdateManyWithWhereWithoutParameterInput | IndicatorUpdateManyWithWhereWithoutParameterInput[]
    deleteMany?: IndicatorScalarWhereInput | IndicatorScalarWhereInput[]
  }

  export type IndicatorUncheckedUpdateManyWithoutParameterNestedInput = {
    create?: XOR<IndicatorCreateWithoutParameterInput, IndicatorUncheckedCreateWithoutParameterInput> | IndicatorCreateWithoutParameterInput[] | IndicatorUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: IndicatorCreateOrConnectWithoutParameterInput | IndicatorCreateOrConnectWithoutParameterInput[]
    upsert?: IndicatorUpsertWithWhereUniqueWithoutParameterInput | IndicatorUpsertWithWhereUniqueWithoutParameterInput[]
    createMany?: IndicatorCreateManyParameterInputEnvelope
    set?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
    disconnect?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
    delete?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
    connect?: IndicatorWhereUniqueInput | IndicatorWhereUniqueInput[]
    update?: IndicatorUpdateWithWhereUniqueWithoutParameterInput | IndicatorUpdateWithWhereUniqueWithoutParameterInput[]
    updateMany?: IndicatorUpdateManyWithWhereWithoutParameterInput | IndicatorUpdateManyWithWhereWithoutParameterInput[]
    deleteMany?: IndicatorScalarWhereInput | IndicatorScalarWhereInput[]
  }

  export type ParameterCreateNestedOneWithoutIndicatorInput = {
    create?: XOR<ParameterCreateWithoutIndicatorInput, ParameterUncheckedCreateWithoutIndicatorInput>
    connectOrCreate?: ParameterCreateOrConnectWithoutIndicatorInput
    connect?: ParameterWhereUniqueInput
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type ParameterUpdateOneRequiredWithoutIndicatorNestedInput = {
    create?: XOR<ParameterCreateWithoutIndicatorInput, ParameterUncheckedCreateWithoutIndicatorInput>
    connectOrCreate?: ParameterCreateOrConnectWithoutIndicatorInput
    upsert?: ParameterUpsertWithoutIndicatorInput
    connect?: ParameterWhereUniqueInput
    update?: XOR<XOR<ParameterUpdateToOneWithWhereWithoutIndicatorInput, ParameterUpdateWithoutIndicatorInput>, ParameterUncheckedUpdateWithoutIndicatorInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type ProgramPersonnelCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    program: ProgramCreateNestedOneWithoutProgramPersonnelInput
  }

  export type ProgramPersonnelUncheckedCreateWithoutUserInput = {
    id?: string
    programId: string
    assignedAt?: Date | string
  }

  export type ProgramPersonnelCreateOrConnectWithoutUserInput = {
    where: ProgramPersonnelWhereUniqueInput
    create: XOR<ProgramPersonnelCreateWithoutUserInput, ProgramPersonnelUncheckedCreateWithoutUserInput>
  }

  export type ProgramPersonnelCreateManyUserInputEnvelope = {
    data: ProgramPersonnelCreateManyUserInput | ProgramPersonnelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgramPersonnelUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgramPersonnelWhereUniqueInput
    update: XOR<ProgramPersonnelUpdateWithoutUserInput, ProgramPersonnelUncheckedUpdateWithoutUserInput>
    create: XOR<ProgramPersonnelCreateWithoutUserInput, ProgramPersonnelUncheckedCreateWithoutUserInput>
  }

  export type ProgramPersonnelUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgramPersonnelWhereUniqueInput
    data: XOR<ProgramPersonnelUpdateWithoutUserInput, ProgramPersonnelUncheckedUpdateWithoutUserInput>
  }

  export type ProgramPersonnelUpdateManyWithWhereWithoutUserInput = {
    where: ProgramPersonnelScalarWhereInput
    data: XOR<ProgramPersonnelUpdateManyMutationInput, ProgramPersonnelUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgramPersonnelScalarWhereInput = {
    AND?: ProgramPersonnelScalarWhereInput | ProgramPersonnelScalarWhereInput[]
    OR?: ProgramPersonnelScalarWhereInput[]
    NOT?: ProgramPersonnelScalarWhereInput | ProgramPersonnelScalarWhereInput[]
    id?: StringFilter<"ProgramPersonnel"> | string
    userId?: StringFilter<"ProgramPersonnel"> | string
    programId?: StringFilter<"ProgramPersonnel"> | string
    assignedAt?: DateTimeFilter<"ProgramPersonnel"> | Date | string
  }

  export type ProgramPersonnelCreateWithoutProgramInput = {
    id?: string
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutProgramPersonnelInput
  }

  export type ProgramPersonnelUncheckedCreateWithoutProgramInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
  }

  export type ProgramPersonnelCreateOrConnectWithoutProgramInput = {
    where: ProgramPersonnelWhereUniqueInput
    create: XOR<ProgramPersonnelCreateWithoutProgramInput, ProgramPersonnelUncheckedCreateWithoutProgramInput>
  }

  export type ProgramPersonnelCreateManyProgramInputEnvelope = {
    data: ProgramPersonnelCreateManyProgramInput | ProgramPersonnelCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type ProgramPersonnelUpsertWithWhereUniqueWithoutProgramInput = {
    where: ProgramPersonnelWhereUniqueInput
    update: XOR<ProgramPersonnelUpdateWithoutProgramInput, ProgramPersonnelUncheckedUpdateWithoutProgramInput>
    create: XOR<ProgramPersonnelCreateWithoutProgramInput, ProgramPersonnelUncheckedCreateWithoutProgramInput>
  }

  export type ProgramPersonnelUpdateWithWhereUniqueWithoutProgramInput = {
    where: ProgramPersonnelWhereUniqueInput
    data: XOR<ProgramPersonnelUpdateWithoutProgramInput, ProgramPersonnelUncheckedUpdateWithoutProgramInput>
  }

  export type ProgramPersonnelUpdateManyWithWhereWithoutProgramInput = {
    where: ProgramPersonnelScalarWhereInput
    data: XOR<ProgramPersonnelUpdateManyMutationInput, ProgramPersonnelUncheckedUpdateManyWithoutProgramInput>
  }

  export type UserCreateWithoutProgramPersonnelInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    hashedPassword: string
    photoURL?: string | null
    address?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProgramPersonnelInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    hashedPassword: string
    photoURL?: string | null
    address?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProgramPersonnelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgramPersonnelInput, UserUncheckedCreateWithoutProgramPersonnelInput>
  }

  export type ProgramCreateWithoutProgramPersonnelInput = {
    id?: string
    name: string
    code: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUncheckedCreateWithoutProgramPersonnelInput = {
    id?: string
    name: string
    code: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramCreateOrConnectWithoutProgramPersonnelInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutProgramPersonnelInput, ProgramUncheckedCreateWithoutProgramPersonnelInput>
  }

  export type UserUpsertWithoutProgramPersonnelInput = {
    update: XOR<UserUpdateWithoutProgramPersonnelInput, UserUncheckedUpdateWithoutProgramPersonnelInput>
    create: XOR<UserCreateWithoutProgramPersonnelInput, UserUncheckedCreateWithoutProgramPersonnelInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgramPersonnelInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgramPersonnelInput, UserUncheckedUpdateWithoutProgramPersonnelInput>
  }

  export type UserUpdateWithoutProgramPersonnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProgramPersonnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUpsertWithoutProgramPersonnelInput = {
    update: XOR<ProgramUpdateWithoutProgramPersonnelInput, ProgramUncheckedUpdateWithoutProgramPersonnelInput>
    create: XOR<ProgramCreateWithoutProgramPersonnelInput, ProgramUncheckedCreateWithoutProgramPersonnelInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutProgramPersonnelInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutProgramPersonnelInput, ProgramUncheckedUpdateWithoutProgramPersonnelInput>
  }

  export type ProgramUpdateWithoutProgramPersonnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateWithoutProgramPersonnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateWithoutInstrumentInput = {
    label: string
    parameter?: ParameterCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutInstrumentInput = {
    id?: number
    label: string
    parameter?: ParameterUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutInstrumentInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutInstrumentInput, AreaUncheckedCreateWithoutInstrumentInput>
  }

  export type AreaCreateManyInstrumentInputEnvelope = {
    data: AreaCreateManyInstrumentInput | AreaCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutInstrumentInput, AreaUncheckedUpdateWithoutInstrumentInput>
    create: XOR<AreaCreateWithoutInstrumentInput, AreaUncheckedCreateWithoutInstrumentInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutInstrumentInput, AreaUncheckedUpdateWithoutInstrumentInput>
  }

  export type AreaUpdateManyWithWhereWithoutInstrumentInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: IntFilter<"Area"> | number
    label?: StringFilter<"Area"> | string
    instrumentId?: StringFilter<"Area"> | string
  }

  export type InstrumentCreateWithoutAreaInput = {
    id?: string
    name: string
  }

  export type InstrumentUncheckedCreateWithoutAreaInput = {
    id?: string
    name: string
  }

  export type InstrumentCreateOrConnectWithoutAreaInput = {
    where: InstrumentWhereUniqueInput
    create: XOR<InstrumentCreateWithoutAreaInput, InstrumentUncheckedCreateWithoutAreaInput>
  }

  export type ParameterCreateWithoutAreaInput = {
    label: string
    indicator?: IndicatorCreateNestedManyWithoutParameterInput
  }

  export type ParameterUncheckedCreateWithoutAreaInput = {
    id?: number
    label: string
    indicator?: IndicatorUncheckedCreateNestedManyWithoutParameterInput
  }

  export type ParameterCreateOrConnectWithoutAreaInput = {
    where: ParameterWhereUniqueInput
    create: XOR<ParameterCreateWithoutAreaInput, ParameterUncheckedCreateWithoutAreaInput>
  }

  export type ParameterCreateManyAreaInputEnvelope = {
    data: ParameterCreateManyAreaInput | ParameterCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type InstrumentUpsertWithoutAreaInput = {
    update: XOR<InstrumentUpdateWithoutAreaInput, InstrumentUncheckedUpdateWithoutAreaInput>
    create: XOR<InstrumentCreateWithoutAreaInput, InstrumentUncheckedCreateWithoutAreaInput>
    where?: InstrumentWhereInput
  }

  export type InstrumentUpdateToOneWithWhereWithoutAreaInput = {
    where?: InstrumentWhereInput
    data: XOR<InstrumentUpdateWithoutAreaInput, InstrumentUncheckedUpdateWithoutAreaInput>
  }

  export type InstrumentUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstrumentUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ParameterUpsertWithWhereUniqueWithoutAreaInput = {
    where: ParameterWhereUniqueInput
    update: XOR<ParameterUpdateWithoutAreaInput, ParameterUncheckedUpdateWithoutAreaInput>
    create: XOR<ParameterCreateWithoutAreaInput, ParameterUncheckedCreateWithoutAreaInput>
  }

  export type ParameterUpdateWithWhereUniqueWithoutAreaInput = {
    where: ParameterWhereUniqueInput
    data: XOR<ParameterUpdateWithoutAreaInput, ParameterUncheckedUpdateWithoutAreaInput>
  }

  export type ParameterUpdateManyWithWhereWithoutAreaInput = {
    where: ParameterScalarWhereInput
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyWithoutAreaInput>
  }

  export type ParameterScalarWhereInput = {
    AND?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
    OR?: ParameterScalarWhereInput[]
    NOT?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
    id?: IntFilter<"Parameter"> | number
    label?: StringFilter<"Parameter"> | string
    areaId?: IntFilter<"Parameter"> | number
  }

  export type AreaCreateWithoutParameterInput = {
    label: string
    instrument: InstrumentCreateNestedOneWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutParameterInput = {
    id?: number
    label: string
    instrumentId: string
  }

  export type AreaCreateOrConnectWithoutParameterInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutParameterInput, AreaUncheckedCreateWithoutParameterInput>
  }

  export type IndicatorCreateWithoutParameterInput = {
    label: string
    description: string
    category: $Enums.Category
    evidence: string
  }

  export type IndicatorUncheckedCreateWithoutParameterInput = {
    id?: number
    label: string
    description: string
    category: $Enums.Category
    evidence: string
  }

  export type IndicatorCreateOrConnectWithoutParameterInput = {
    where: IndicatorWhereUniqueInput
    create: XOR<IndicatorCreateWithoutParameterInput, IndicatorUncheckedCreateWithoutParameterInput>
  }

  export type IndicatorCreateManyParameterInputEnvelope = {
    data: IndicatorCreateManyParameterInput | IndicatorCreateManyParameterInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutParameterInput = {
    update: XOR<AreaUpdateWithoutParameterInput, AreaUncheckedUpdateWithoutParameterInput>
    create: XOR<AreaCreateWithoutParameterInput, AreaUncheckedCreateWithoutParameterInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutParameterInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutParameterInput, AreaUncheckedUpdateWithoutParameterInput>
  }

  export type AreaUpdateWithoutParameterInput = {
    label?: StringFieldUpdateOperationsInput | string
    instrument?: InstrumentUpdateOneRequiredWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutParameterInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type IndicatorUpsertWithWhereUniqueWithoutParameterInput = {
    where: IndicatorWhereUniqueInput
    update: XOR<IndicatorUpdateWithoutParameterInput, IndicatorUncheckedUpdateWithoutParameterInput>
    create: XOR<IndicatorCreateWithoutParameterInput, IndicatorUncheckedCreateWithoutParameterInput>
  }

  export type IndicatorUpdateWithWhereUniqueWithoutParameterInput = {
    where: IndicatorWhereUniqueInput
    data: XOR<IndicatorUpdateWithoutParameterInput, IndicatorUncheckedUpdateWithoutParameterInput>
  }

  export type IndicatorUpdateManyWithWhereWithoutParameterInput = {
    where: IndicatorScalarWhereInput
    data: XOR<IndicatorUpdateManyMutationInput, IndicatorUncheckedUpdateManyWithoutParameterInput>
  }

  export type IndicatorScalarWhereInput = {
    AND?: IndicatorScalarWhereInput | IndicatorScalarWhereInput[]
    OR?: IndicatorScalarWhereInput[]
    NOT?: IndicatorScalarWhereInput | IndicatorScalarWhereInput[]
    id?: IntFilter<"Indicator"> | number
    label?: StringFilter<"Indicator"> | string
    description?: StringFilter<"Indicator"> | string
    category?: EnumCategoryFilter<"Indicator"> | $Enums.Category
    evidence?: StringFilter<"Indicator"> | string
    parameterId?: IntFilter<"Indicator"> | number
  }

  export type ParameterCreateWithoutIndicatorInput = {
    label: string
    area: AreaCreateNestedOneWithoutParameterInput
  }

  export type ParameterUncheckedCreateWithoutIndicatorInput = {
    id?: number
    label: string
    areaId: number
  }

  export type ParameterCreateOrConnectWithoutIndicatorInput = {
    where: ParameterWhereUniqueInput
    create: XOR<ParameterCreateWithoutIndicatorInput, ParameterUncheckedCreateWithoutIndicatorInput>
  }

  export type ParameterUpsertWithoutIndicatorInput = {
    update: XOR<ParameterUpdateWithoutIndicatorInput, ParameterUncheckedUpdateWithoutIndicatorInput>
    create: XOR<ParameterCreateWithoutIndicatorInput, ParameterUncheckedCreateWithoutIndicatorInput>
    where?: ParameterWhereInput
  }

  export type ParameterUpdateToOneWithWhereWithoutIndicatorInput = {
    where?: ParameterWhereInput
    data: XOR<ParameterUpdateWithoutIndicatorInput, ParameterUncheckedUpdateWithoutIndicatorInput>
  }

  export type ParameterUpdateWithoutIndicatorInput = {
    label?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutParameterNestedInput
  }

  export type ParameterUncheckedUpdateWithoutIndicatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProgramPersonnelCreateManyUserInput = {
    id?: string
    programId: string
    assignedAt?: Date | string
  }

  export type ProgramPersonnelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutProgramPersonnelNestedInput
  }

  export type ProgramPersonnelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramPersonnelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramPersonnelCreateManyProgramInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
  }

  export type ProgramPersonnelUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgramPersonnelNestedInput
  }

  export type ProgramPersonnelUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramPersonnelUncheckedUpdateManyWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateManyInstrumentInput = {
    id?: number
    label: string
  }

  export type AreaUpdateWithoutInstrumentInput = {
    label?: StringFieldUpdateOperationsInput | string
    parameter?: ParameterUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutInstrumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    parameter?: ParameterUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutInstrumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ParameterCreateManyAreaInput = {
    id?: number
    label: string
  }

  export type ParameterUpdateWithoutAreaInput = {
    label?: StringFieldUpdateOperationsInput | string
    indicator?: IndicatorUpdateManyWithoutParameterNestedInput
  }

  export type ParameterUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    indicator?: IndicatorUncheckedUpdateManyWithoutParameterNestedInput
  }

  export type ParameterUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type IndicatorCreateManyParameterInput = {
    id?: number
    label: string
    description: string
    category: $Enums.Category
    evidence: string
  }

  export type IndicatorUpdateWithoutParameterInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    evidence?: StringFieldUpdateOperationsInput | string
  }

  export type IndicatorUncheckedUpdateWithoutParameterInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    evidence?: StringFieldUpdateOperationsInput | string
  }

  export type IndicatorUncheckedUpdateManyWithoutParameterInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    evidence?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}