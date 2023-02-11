# hot-shop-booking-alerts

Simple script that checks booking availability of Oslo based restaurant [Hot Shop](https://www.restauranthotshop.no/) and posts to slack if there are any tables available.

![image](https://user-images.githubusercontent.com/1507032/218274680-71983527-0c11-4a0a-82c3-eeea4b7f7b4b.png)

## Code

This script uses [Deno](https://deno.land/), the entry point is [mod.ts](./mod.ts). Code is bundled to speed up the [Github Action cron-job](./.github/workflows/cron.yml) that runs every 7 minutes.
