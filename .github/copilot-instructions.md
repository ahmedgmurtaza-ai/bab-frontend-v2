# Design system

it refers to components and stories in /packages/ui
use ant design components : https://ant.design/components/overview/ for all ui components in design system

keep the code clean, simple and easy to maintain

the idea is to create ui components that wrap ant design components with custom styles and props and then will use them in the app

# starter template

we will use component from @repo/ui which refers to /packages/ui components
like this: import { Button } from '@repo/ui';

# coding guidelines

keep code simple, clean and easy to maintain
avoid over engineering or making things complex
or local state use usestate and for global state use zustand store from /store
create separate selectors for zustand store in /store/selectors for each features and modules
use typescript for type safety but not overdo it
create custom hooks where necessary in /hooks
only use tailwindcss for styling and avoid css modules or styled components
when ever i accept

# Routing

Routing : make keep routing clean, create new file for feature/module nested routing
use lazy loading for all routes
use react router v7 for routing

# ask me

if you find anything unclear or incomplete instructions from me, please ask me for clarification before proceeding, don't assume always ask

make sure to add some usecases for each components in stories for example for input component add events keypress, focus and others similarly for button add onClick event and others
