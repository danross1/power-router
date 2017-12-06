# angular-routing-and-services-heroes

## Before Lecture

Create the `comicbook_heroes` database and create the `power` table (SQL queries can be found in the `database.sql` file.)

## In Lecture

Create a `Powers` view with

- A `GET` request to retrieve all powers from `localhost:5000/power` (this server route should already be working)
- A `POST` route that allows a user to add a new power
- A `PUT` route that allows a user to update a power

Notes:

- Going forward, all `$http` requests should be made from services.

## Base Mode

Create a `Hero` table with

- id
- name
- backstory

Heroes should be able to have many powers, and many heroes may have the same powers (many to many). Create a junction table to accomodate this. In the junction table, use `ON DELETE CASCADE` after the `REFERENCES` piece in order to allow deleting heroes who are still listed in the junction table. [(Stack overflow example)](https://stackoverflow.com/a/3712389/3644991)

Create a `Heroes` view with

- A `GET` request to retrieve all heroes from `localhost:5000/hero/all`. The table it is displayed on should have a column for the hero's `name`, `powers` (a list of all powers, these powers will need to be added in the database for now until pro mode, since there is no `hero_power` post yet), and a column for `Delete`. The `backstory` and power `description`s are too long to put on a view like this, so don't list them out on this page. If a hero has multiple powers, the hero should only be listed in a single row. It may help to research [Array Aggregates (array_agg)](https://www.postgresql.org/docs/9.5/static/functions-aggregate.html) for this part.
- A `POST` route that allows a user to add a new hero (if you would like to add powers to your new hero, do that in the database for now. The ability to add powers in the UI will be added in Pro mode)
- A `DELETE` request like `localhost:5000/hero/1` to delete a hero from the database

## Hard Mode

Create a view for `Universes` which allows a user to `GET`, `POST`, and `PUT` comic book universes with the following properties:

- id
- name (e.g. DC or Marvel)
- year_founded

On the `Heroes` view, add a column for `Universe` before the `Delete` column

## Pro Mode

Create a `Hero` view for a single hero with

- A `GET` request to retrieve just the information about a single hero like `localhost:5000/hero/details/1` should return _all_ of the information for Wonder Woman (including the detailed descriptions of powers that does not appear on the other `Heroes` view)
- A `PUT` request like `localhost:5000/hero/1` to edit the current hero's `name` and `backstory`.
- Reuse the `DELETE` request like `localhost:5000/hero/1` to delete a hero from the database (should be using same service)

Add and delete powers to a hero with

- A `POST` request like `localhost:5000/hero/power/1` which would have a req.body like `{ power: 5 }` which would add the power with `id` of `5` to hero `1` (Wonder Woman in our example)
- A `DELETE` request like `localhost:5000/hero/power/1` which would have a req.body like `{ power: 5 }` which would add the power with `id` of `5` to hero `1` (Wonder Woman in our example)


This will require researching "Angular Route Params" - These are client-side route parameters that will look something like `localhost:5000/#!/hero/1` for the hero with id of `1` (may be a page that lists out all of the information about Wonder Woman) and `localhost:5000/#!/hero/4` for the hero with id of `4` (may be a page that lists out all of the information about Batman)

## Ultra Pro Mode

Delete requests really shouldn't have `data` and `req.body`. Instead, research angular `params` and `req.query` and the delete request should look like this:

```JavaScript
{
    method: 'DELETE',
    url: '/hero/power',
    params: {
        hero_id: 1,
        power_id: 5
    }
}
```
