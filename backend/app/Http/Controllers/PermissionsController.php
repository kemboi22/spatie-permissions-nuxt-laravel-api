<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->success(Permission::query()->get());
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => "required",
            "roleId" => "integer|unique:roles,id"
        ]);
        $role = Role::query()->find($request->roleId);
        $permission = Permission::query()->create([
            "name" => $request->name
        ]);
        $role->givePermissionTo($permission);
//        $permission->assignRole($role);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|unique:permissions,name,'.$id
        ]);
        $permission = Permission::query()->find($id);

        $update = $permission->update($request->only('name'));
        return $this->success($update);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
