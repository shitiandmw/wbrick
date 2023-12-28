import { EventInterface } from './EventManager';
import { ApiInterface } from './ApiManager';
import { MongoInterface } from './MongoManager';
import { RouteInterface } from './RouteManager';
import { LoggerInterface } from './LoggerManager';
import { RedisInterface } from './RedisManager';


export interface PluginDependencies {
    routerInterface?: RouteInterface;
    eventInterface?: EventInterface;
    apiInterface?: ApiInterface;
    mongoInterface?: MongoInterface;
    redisInterface?: RedisInterface;
    loggerInterface?: LoggerInterface;
}

export interface PluginInterface {
    constructor(dependencies: PluginDependencies): void;
    initialize(): void;
}