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

# apis

all the api requests will be creatied via axios and hacndled through reactquery

# pages

we have created follwing pages:
/auth :
1 - login
2 -register
3 - forgot password
3 - otp

# hooks

Hooks should be pure and reusable, only returning state and mutation functions.
Components can then decide how to handle success, error, or loading states, making the UI logic clear and flexible.
This keeps hooks generic and easy to test, and avoids hidden side effects.
Best Practice:

Let hooks like useLogin and useOtpSubmit only return mutation objects.
Show notifications and handle navigation in the component, using the mutation's onSuccess and onError options or by watching mutation state.

# design system

define global theme which will be used across all components in design system
use ant design theming capabilities to define colors, typography, spacing etc.
theme colors we are following are: f4e5de-ffffff-d6d7da-761217-e77955
