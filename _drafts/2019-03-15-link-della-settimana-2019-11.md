---
layout: post
header_image: /images/posts/dandelion-2612639_1280.jpg
header_image_credits: Image by <a href="https://pixabay.com/users/klimkin-1298145/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2612639">klimkin</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2612639">Pixabay</a>
title: "Link della settimana 2019#11"
author: Andrea Dottor
tags: [.NET Core,ASP.NET,Blazor,DevOps,Links]
---

Ecco il primo di una serie di post *settimanali* (almeno questa è la speranza) dove potere trovare alcuni link ad articoli e post che ritengo particolarmente interessanti. Così se qualcuno di voi è un pò assente dai social, slack o altri canali, possa trovare qui le ultime novità.
<!--more-->
L'idea sarebbe anche di aggiungere un mio personale commento ad ogni singolo articolo, ma meglio non pretendere troppo...almeno per ora. :-)

## .NET Core

* [Announcing .NET Core 3 Preview 3](https://devblogs.microsoft.com/dotnet/announcing-net-core-3-preview-3/)
    >[Download and get started with .NET Core 3 Preview 3](https://aka.ms/netcore3download) right now on Windows, macOS and Linux.
    >
    >You can see complete details of the release in the [.NET Core 3 Preview 3 release notes](https://aka.ms/netcore3releasenotes).
    >
    >.NET Core 3.0 will be supported in Visual Studio 2019, Visual Studio for Mac and Visual Studio Code. [...]

* [.NET Core March 2019 Updates – 1.0.15, 1.1.12, 2.1.9 and 2.2.3](https://devblogs.microsoft.com/dotnet/net-core-march-2019/)
    >Today, we are releasing the .NET Core March 2019 Update. These updates contain security and reliability fixes. See the individual release notes for details on included reliability fixes. [...]

## ASP&#46;NET

* [ASP.NET Core updates in .NET Core 3.0 Preview 3](https://devblogs.microsoft.com/aspnet/asp-net-core-updates-in-net-core-3-0-preview-3/)
    > Here’s the list of what’s new in this preview:
    >* Razor Components improvements:
    >    * Single project template
    >    * New .razor extension
    >    * Endpoint routing integration
    >    * Prerendering
    >    * Razor Components in Razor Class Libraries
    >    * Improved event handling
    >    * Forms & validation
    >* Runtime compilation
    >* Worker Service template
    >* gRPC template
    >* Angular template updated to Angular 7
    >* Authentication for Single Page Applications
    >* SignalR integration with endpoint routing
    >* SignalR Java client support for long polling 
    >
    >[...]
		
* [Blazor 0.9.0 experimental release now available](https://devblogs.microsoft.com/aspnet/blazor-0-9-0-experimental-release-now-available/)
    >New Razor Component improvements now available to Blazor apps:
    >* Improved event handling
    >* Forms & validation 
    >
    >[...]

* [Telerik UI for Blazor: Grid Component Basics](https://www.telerik.com/blogs/telerik-ui-for-blazor-grid-component-basics)
    >The Telerik UI for Blazor data grid features functionality like paging, sorting, templates, and themes out of the box. Learn how to get started with the grid's basic features today. [...]

	
* [OWASP Top 10 Vulnerabilities & ASP.NET](https://www.infoq.com/presentations/owasp-top-10-vulnerabilities-2017)
    >Bill Dinger goes over the 2017 OWASP Top 10 vulnerabilities and how they apply to ASP&#46;NET, including a demo of each vulnerability, the risk it poses, how to detect the attack, and how to mitigate it. [...]

* [Real-time web applications with ASP.NET Core SignalR](https://channel9.msdn.com/Shows/On-NET/Real-time-web-applications-with-ASPNET-Core-SignalR)
    >Brady Gaster (@bradygaster) joins Cecil (@cecilphillip) to show how easy it is to add real-time functionality to your web applications using ASP&#46;NET Core SignalR. They discuss topics such as targeting with clients, SignalR transports, and options for running your SignalR application in the cloud. [...]

* [Security Experiments with gRPC and ASP.NET Core 3.0](https://damienbod.com/2019/03/06/security-experiments-with-grpc-and-asp-net-core-3-0/)
    >This article shows how a [gRPC](https://grpc.io/) service could implement OAuth2 security using IdentityServer4 as the token service. [...]

* [Real-time serverless applications with the SignalR Service bindings in Azure Functions](https://azure.microsoft.com/it-it/blog/real-time-serverless-applications-with-the-signalr-service-bindings-in-azure-functions/)
    >Since our public preview announcement at Microsoft Ignite 2018, every month thousands of developers worldwide have leveraged the Azure SignalR Service bindings for Azure Functions to add real-time capabilities to their serverless applications. Today, we are excited to announce the general availability of these bindings in all global regions where Azure SignalR Service is available! [...]

* [Why isn't my session state working in ASP.NET Core? Session state, GDPR, and non-essential cookies](https://andrewlock.net/session-state-gdpr-and-non-essential-cookies/)
    >In this post I described an issue that I've been asked about several times, where developers find that their session state isn't saving correctly. This is commonly due to the GDPR features introduced in ASP&#46;NET Core 2.1 for cookie consent and non-essential cookies.
    >
    >I showed an example of the issue in action, and how it differs between a 2.0 app and a 2.2 app. I described how session state relies on a session cookie that is considered non-essential by default, and so is not written to the response until a user provides consent. [...]

## Vari

* [Entity Framework Core: Show Parameter Values in Logging](https://itnext.io/entity-framework-core-show-parameter-values-in-logging-5ac58b6a4929)
    >Back in October, I did a post on Entity Framework Core: Logging which covers enabling logging for Entity Framework Core. This post is going to expand on that previous post and show you how to get the parameter values used in the queries in addition to the SQL statements being used. [...]

* [Learning GraphQL By Doing](https://blog.digitalocean.com/learning-graphql-by-doing/)
    >In this tutorial, we’ll cover the basic concepts required for app developers to understand GraphQL, with the intention of learning what a GraphQL API looks like—and how it compares to REST-API equivalents—by actually trying it out. [...]

* [Azure DevOps for Agile Projects](https://www.mssqltips.com/sqlservertip/5732/azure-devops-for-agile-projects)
    >If you are new to modern day development, you might think that the words Agile and Scrum are interchangeable concepts since many project managers refer to them during team discussions. [...]
    >
    >Microsoft Azure DevOps is the next generation of Visual Studio Team Services in the cloud.  This product combines scrum project management tools and software version control into one service.
    >
    >How can we plan, track and execute tasks using Azure Dev Ops? [...]

* [Is Your VS Code Extension Slow? Here's How to Speed it Up!](https://dev.to/azure/is-your-vs-code-extension-slow-heres-how-to-speed-it-up-4d66)
    >VS Code users (and there are a lot of us) just love our extensions. There are thousands of VS Code extension to choose from and many of us have several installed. They do everything from lighting up your favorite language, formatting your code, or even colorizing your theme.
    >
    >Have you ever noticed that some extensions take a few moments to initialize as you start VS Code? What might cause this delay? [...]


