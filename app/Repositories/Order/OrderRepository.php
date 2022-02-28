<?php

namespace App\Repositories\Order;

use App\Models\Order;
use Illuminate\Support\Facades\DB;


class OrderRepository
{
    public function createOrder($userId, $orderAmount, $cart)
    {

        DB::beginTransaction();

        try {
            $idOrder = Order::insertGetId(
                [
                    'user_id' => $userId,
                    'order_date' => date_format(date_create(), 'Y-m-d H:i:s'),
                    'order_amount' => $orderAmount
                ]
            );

            $cartMapped = collect($cart)->map(function ($value) use($idOrder){
                return [
                    "order_id" => $idOrder,
                    "book_id" => $value["bookId"],
                    "quantity" => $value["quantity"],
                    "price" => $value["price"],
                ];
            })->all();

            DB::table("order_item")->insert($cartMapped);
            DB::commit();

            return 1;
        } catch (\Exception $e) {
            DB::rollback();
            //throw $th;
            return 0;
        }
    }
}
